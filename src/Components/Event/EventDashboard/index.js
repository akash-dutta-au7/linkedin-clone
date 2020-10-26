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
    selectedEvent: null,
  };

  //toggle
  // handleIsOpenToggle = () => {
  //   const toggle = !this.state.isOpen;
  //   this.setState({ isOpen: toggle });
  // };

  //form open
  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null,
    });
  };
  //form cancel
  handleFormCancel = () => {
    this.setState({
      isOpen: false,
    });
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

  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent: event,
      isOpen: true,
    });
  };
  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} selectEvent={this.handleSelectEvent} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button positive onClick={this.handleFormOpen}>
              Create Event
            </Button>
            {isOpen && (
              <EventForm
                selectEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                handleFormCancel={this.handleFormCancel}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
