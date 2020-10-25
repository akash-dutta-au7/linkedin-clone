import React, { Component } from "react";
import { Image, List } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    const { photoURL } = this.props.attendee;
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={photoURL} />
      </List.Item>
    );
  }
}

export default EventListAttendee;
