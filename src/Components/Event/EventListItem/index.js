import React, { Component, Fragment } from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "../EventListAttendee";

class EventListItem extends Component {
  render() {
    const { selectEvent, event } = this.props;
    const {
      hostPhotoURL,
      title,
      hostedBy,
      date,
      city,
      description,
      attendees,
    } = event;
    return (
      <Fragment>
        <Fragment>
          <Segment.Group>
            <Segment>
              <Item.Group>
                <Item>
                  <Item.Image size="tiny" circular src={hostPhotoURL} />
                  <Item.Content>
                    <Item.Header>{title}</Item.Header>
                    <Item.Description>Hosted by {hostedBy}</Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
            <Segment>
              <span>
                <Icon name="clock" /> {date.slice(0, 10)} |
                <Icon name="marker" /> {city}
              </span>
            </Segment>
            <Segment secondary>
              <List horizontal>
                {attendees.map((attendee) => (
                  <EventListAttendee key={attendee.id} attendee={attendee} />
                ))}
              </List>
            </Segment>
            <Segment clearing>
              <span>{description}</span>
              <Button
                as="a"
                color="teal"
                floated="right"
                content="View"
                onClick={() => selectEvent(event)}
              />
            </Segment>
          </Segment.Group>
        </Fragment>
      </Fragment>
    );
  }
}

export default EventListItem;
