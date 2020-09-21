import React from "react";
import EventsList from "components/EventsList";
import Event from "interfaces/Event.interface";
import getEventLogs from "services/ColonyClient";
import styles from "./events.module.css";

interface Props {}

interface State {
  isLoading: boolean;
  eventsList: Event[] | null;
}

export default class Events extends React.Component<Props, State> {
  state = {
    isLoading: false,
    eventsList: [],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    getEventLogs().then(
      (eventsList) => {
        this.setState({ eventsList, isLoading: false });
      },
      (error) => {
        this.setState({ eventsList: null, isLoading: false });
      }
    );
  }

  render() {
    return (
      <div className={styles.eventsContainer}>
        {this.state.isLoading ? (
          <div>Loading data...</div>
        ) : this.state.eventsList ? (
          <EventsList eventsList={this.state.eventsList} />
        ) : (
          <div>Uh oh! Failed to load data.</div>
        )}
      </div>
    );
  }
}
