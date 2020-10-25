import React, { Component, Fragment } from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "../EventListAttendee";

class EventListItem extends Component {
  render() {
    const {
      hostPhotoURL,
      title,
      hostedBy,
      date,
      city,
      description,
      attendees,
    } = this.props.event;
    return (
      <Fragment>
        <Fragment>
          <Segment.Group>
            <Segment>
              <Item.Group>
                <Item>
                  <Item.Image size="tiny" circular src={hostPhotoURL} />
                  <Item.Content>
                    <Item.Header as="a">{title}</Item.Header>
                    <Item.Description>
                      Hosted by <a href="/#">{hostedBy}</a>
                    </Item.Description>
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
              <Button as="a" color="teal" floated="right" content="View" />
            </Segment>
          </Segment.Group>
        </Fragment>
      </Fragment>
    );
  }
}

export default EventListItem;
