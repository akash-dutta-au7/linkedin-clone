import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import EventForm from "../EventForm";
import EventList from "../EventList";
import { events } from "../../../mockdata";
class EventDashboard extends Component {
  render() {
    console.log(events);
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button positive>Create Event</Button>
            <EventForm />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
