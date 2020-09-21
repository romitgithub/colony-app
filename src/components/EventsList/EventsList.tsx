import React from "react";
import EventInterface from "interfaces/Event.interface";
import EventCard from "components/EventCard";

import styles from "./eventsList.module.css";

interface Props {
  eventsList: EventInterface[];
}

export default function EventsList({ eventsList }: Props) {
  return (
    <div className={styles.eventsList}>
      {eventsList.map((event: EventInterface, index) => (
        <EventCard event={event} key={index} />
      ))}
    </div>
  );
}
