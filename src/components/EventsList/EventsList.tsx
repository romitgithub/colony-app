import React from "react";
import EventInterface from "interfaces/Event.interface";
import EventCard from "components/EventCard";

import styles from "./eventsList.module.css";

interface Props {
  eventsList: EventInterface[];
}

export default class EventsList extends React.Component<Props> {
  state = {
    page: 0,
  };

  handleScroll = (event: any) => {
    if (
      event.target.offsetHeight + event.target.scrollTop ===
      event.target.scrollHeight
    ) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  getItems = () => {
    const { page } = this.state;
    return this.props.eventsList.slice(0, (page + 1) * 10);
  };

  render() {
    const events = this.getItems();
    return (
      <div className={styles.container} onScroll={this.handleScroll}>
        <div className={styles.list}>
          {events.map((event: EventInterface, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
