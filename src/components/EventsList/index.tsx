import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import EventInterface from "../../interfaces/Event.interface";
import EventCard from "../EventCard/";

import styles from "./eventsList.module.css";

interface Props {
  eventsList: EventInterface[];
}

interface State {
  page: number;
  perPage: number;
}

export default class EventsList extends React.Component<Props, State> {
  state = {
    page: 0,
    perPage: 10,
  };

  updatePageInfo = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  getItems = () => {
    const { page, perPage } = this.state;
    return this.props.eventsList.slice(0, (page + 1) * perPage);
  };

  render() {
    const events = this.getItems();
    return (
      <div className={styles.eventsList}>
        <InfiniteScroll
          dataLength={events.length} //This is important field to render the next data
          next={this.updatePageInfo}
          hasMore={events.length < this.props.eventsList.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          // refreshFunction={this.refresh}
          // pullDownToRefresh
          // pullDownToRefreshThreshold={50}
          // pullDownToRefreshContent={
          //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
          // }
          // releaseToRefreshContent={
          //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
          // }
        >
          {events.map((event: EventInterface, index) => (
            <EventCard event={event} key={index} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
