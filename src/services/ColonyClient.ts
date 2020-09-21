import {
  getColonyNetworkClient,
  Network,
  getLogs,
  getBlockTime,
  ColonyRole,
} from "@colony/colony-js";
import { Wallet, utils } from "ethers";
import { InfuraProvider, Log } from "ethers/providers";
import { EventTypes } from "../constants";
import Event from "interfaces/Event.interface";
import apiService from "./ApiService";
import { getTokenSymbolMap, saveTokenSymbolMap } from "./utils";
import { LogDescription } from "ethers/utils";

// Set up the network address constants that you'll be using
// The two below represent the current ones on mainnet
// Don't worry too much about them, just use them as-is
const MAINNET_NETWORK_ADDRESS = `0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef`;
const MAINNET_BETACOLONY_ADDRESS = `0x869814034d96544f3C62DE2aC22448ed79Ac8e70`;

const INFURA_NETWORK = "homestead";
const INFURA_PROJECT_ID = "4c30d38bb01645a1bef9e70fbab10582";

// Get a new Infura provider (don't worry too much about this)
const provider = new InfuraProvider(INFURA_NETWORK, INFURA_PROJECT_ID);

const networkClientOptions = {
  networkAddress: MAINNET_NETWORK_ADDRESS,
};

let TokenSymbolMapping: { [key: string]: string } = getTokenSymbolMap();

// Get a random wallet
// You don't really need control over it, since you won't be firing any trasactions out of it
const wallet = Wallet.createRandom();
// Connect your wallet to the provider
const connectedWallet = wallet.connect(provider);

const getColonyClient = async () => {
  // Get a network client instance
  const networkClient = await getColonyNetworkClient(
    Network.Mainnet,
    connectedWallet,
    networkClientOptions
  );

  // Get the colony client instance for the betacolony
  const colonyClient = await networkClient.getColonyClient(
    MAINNET_BETACOLONY_ADDRESS
  );
  return colonyClient;
};

const getDate = async (blockHash: string | undefined) => {
  if (blockHash) {
    const date = await getBlockTime(provider, blockHash);
    return date;
  } else {
    return -1;
  }
};

const getAmount = (originalAmount: string) => {
  const humanReadableAmount = new utils.BigNumber(originalAmount);
  // Get a base 10 value as a BigNumber instance
  const wei = new utils.BigNumber(10);

  // The converted amount is the human readable amount divided by the wei value raised to the power of 18
  const convertedAmount = humanReadableAmount.div(wei.pow(18));

  // If you are confident that it's a low enough value, you can display it as an integer -- .toNumber()
  // But to be on the safe side, you can also use it as a string
  return convertedAmount.toString();
};

const getColonyInitialisedData = () => {
  return {
    primary: { data: "Congratulations! It's a beautiful baby colony!" },
  };
};

const getColonyRoleSetData = (parsedEvent: LogDescription, event: Log) => {
  const role = ColonyRole[parsedEvent.values.role];
  const userAddress = event.address;
  const domainId = new utils.BigNumber(parsedEvent.values.domainId).toString();

  return {
    primary: { role, userAddress, domainId },
  };
};

const getPayoutClaimedData = (parsedEvent: LogDescription, event: Log) => {
  const userAddress = event.address;
  const amount = getAmount(parsedEvent.values.amount);
  const rewardPayoutId = new utils.BigNumber(
    parsedEvent.values.fundingPotId
  ).toString();
  const token = parsedEvent.values.token;

  return {
    primary: { userAddress, amount, rewardPayoutId, token },
  };
};

const getDomainAddedData = (parsedEvent: LogDescription) => {
  const domainId = new utils.BigNumber(parsedEvent.values.domainId).toString();

  return {
    primary: { domainId },
  };
};

const getSymbolFromToken = async (token: string) => {
  if (TokenSymbolMapping[token]) {
    return TokenSymbolMapping[token];
  } else {
    const API_KEY = "EK-b3gZS-1FQnoyC-5GyNY";
    const tokenInfo: any = await apiService.get(
      `https://api.ethplorer.io/getTokenInfo/${token}?apiKey=${API_KEY}`,
      {}
    );
    if (tokenInfo) {
      TokenSymbolMapping = { ...TokenSymbolMapping, [token]: tokenInfo.symbol };
      saveTokenSymbolMap(TokenSymbolMapping);
    }
    return tokenInfo ? tokenInfo.symbol : undefined;
  }
};

const processEventLogsData = async (
  eventLogs: Log[],
  parsedLogs: LogDescription[]
) => {
  const data: Event[] = await Promise.all(
    parsedLogs.map(async (event: LogDescription, index: number) => {
      const date = await getDate(eventLogs[index].blockHash);

      let finalEventData: Event = {
        type: event.name,
        secondary: date,
        avatarSeed: eventLogs[index].address
          ? eventLogs[index].address
          : eventLogs[index].transactionHash,
      };

      switch (event.name) {
        case EventTypes.ColonyInitialised:
          finalEventData = {
            ...finalEventData,
            ...getColonyInitialisedData(),
          };
          break;
        case EventTypes.ColonyRoleSet:
          finalEventData = {
            ...finalEventData,
            ...getColonyRoleSetData(event, eventLogs[index]),
          };
          break;
        case EventTypes.PayoutClaimed:
          const claimedData = getPayoutClaimedData(event, eventLogs[index]);
          const symbol = await getSymbolFromToken(claimedData.primary.token);
          finalEventData = {
            ...finalEventData,
            ...claimedData,
          };
          finalEventData.primary.symbol = symbol;
          break;
        case EventTypes.DomainAdded:
          finalEventData = {
            ...finalEventData,
            ...getDomainAddedData(event),
          };
          break;
        default:
          finalEventData = { ...finalEventData };
      }
      return finalEventData;
    })
  );

  data.sort((a: Event, b: Event) => b.secondary - a.secondary);

  return data;
};

const getEventLogs = async () => {
  const colonyClient: any = await getColonyClient();
  // Get the filter
  // There's a corresponding filter method for all event types
  const eventFilter1 = colonyClient.filters.PayoutClaimed();
  const eventFilter2 = colonyClient.filters.ColonyInitialised();
  const eventFilter3 = colonyClient.filters.ColonyRoleSet();
  const eventFilter4 = colonyClient.filters.DomainAdded();

  // Get the raw logs array
  const eventLogs: Log[] = [
    ...(await getLogs(colonyClient, eventFilter1)),
    ...(await getLogs(colonyClient, eventFilter2)),
    ...(await getLogs(colonyClient, eventFilter3)),
    ...(await getLogs(colonyClient, eventFilter4)),
  ];

  const parsedLogs: LogDescription[] = eventLogs.map((event) =>
    colonyClient.interface.parseLog(event)
  );

  const eventLogsData = processEventLogsData(eventLogs, parsedLogs);
  return eventLogsData;
};

export default getEventLogs;
