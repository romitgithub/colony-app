import React, { Component } from "react";
import EventInterface from "interfaces/Event.interface";
import blockies from "services/blockies";
import { EventTypes } from "../../constants";

import styles from "./eventCard.module.css";

interface Props {
  event: EventInterface;
}

export default class EventCard extends Component<Props> {
  getPrimaryText = (event: EventInterface) => {
    const {
      data,
      role,
      userAddress,
      domainId,
      amount,
      token,
      rewardPayoutId,
      symbol,
    } = event.primary;
    switch (event.type) {
      case EventTypes.ColonyInitialised:
        return <div className={styles.primaryText}>{data}</div>;
      case EventTypes.ColonyRoleSet:
        return (
          <div className={styles.primaryText}>
            <span>{role}</span> role assigned to user <span>{userAddress}</span>{" "}
            in domain <span>{domainId}</span>
          </div>
        );
      case EventTypes.PayoutClaimed:
        return (
          <div className={styles.primaryText}>
            User <span>{userAddress}</span> claimed{" "}
            <span>
              {amount}
              {symbol ? symbol : token}
            </span>{" "}
            payout from pot <span>{rewardPayoutId}</span>
          </div>
        );
      case EventTypes.DomainAdded:
        return (
          <div className={styles.primaryText}>
            Domain <span>{domainId}</span> added.
          </div>
        );
      default:
        return <div className={styles.primaryText}>{event.primary}</div>;
    }
  };

  render() {
    const { event } = this.props;
    const icon = blockies.create({
      seed: event.avatarSeed,
    });
    const imageUrl = icon.toDataURL();
    const formattedDate =
      event.secondary !== -1 ? new Date(event.secondary).toDateString() : "";
    const PrimaryText = this.getPrimaryText(event);
    return (
      <div className={styles.card}>
        <img className={styles.avatar} src={imageUrl} alt="user-entropy-icon" />

        <div className={styles.metaData}>
          {PrimaryText}
          <div className={styles.secondaryText}>{formattedDate}</div>
        </div>
      </div>
    );
  }
}
