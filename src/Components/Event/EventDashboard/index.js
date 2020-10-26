import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import EventForm from "../EventForm";
import EventList from "../EventList";
import { eventsData } from "../../../mockdata";
import cuid from "cuid";
import Swal from "sweetalert2";

class EventDashboard extends Component {
  state = {
    events: eventsData,
    isOpen: false,
  };

  //toggle
  handleIsOpenToggle = () => {
    const toggle = !this.state.isOpen;
    this.setState({ isOpen: toggle });
  };

  //create event
  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "https://source.unsplash.com/random";
    newEvent.attendees = [
      {
        id: "a",
        name: "Akash",
        photoURL: "https://source.unsplash.com/random",
      },
      {
        id: "b",
        name: "Aniket",
        photoURL: "https://source.unsplash.com/random",
      },
    ];
    this.setState({
      events: [...this.state.events, newEvent],
    });
    Swal.fire({
      title: "Success",
      text: "Contact successfully created",
      icon: "success",
      position: "center",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    }, 1000);
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
              <EventForm
                createEvent={this.handleCreateEvent}
                handleIsOpenToggle={this.handleIsOpenToggle}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
