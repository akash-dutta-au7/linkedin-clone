import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import EventForm from "../EventForm";
import EventList from "../EventList";
import { eventsData } from "../../../mockdata";
class EventDashboard extends Component {
  state = {
    events: eventsData,
    isOpen: false,
  };
  handleIsOpenToggle = () => {
    const toggle = !this.state.isOpen;
    this.setState({ isOpen: toggle });
  };
  render() {
    const { events, isOpen } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button positive onClick={this.handleIsOpenToggle}>
              Create Event
            </Button>
            {isOpen && (
              <EventForm handleIsOpenToggle={this.handleIsOpenToggle} />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
