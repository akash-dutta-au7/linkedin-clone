import React, { Component } from "react";
import EventListItem from "../EventListItem";

class EventList extends Component {
  render() {
    const { events, selectEvent } = this.props;
    return (
      <div>
        {events.map((event) => (
          <EventListItem
            key={event.id}
            event={event}
            selectEvent={selectEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
