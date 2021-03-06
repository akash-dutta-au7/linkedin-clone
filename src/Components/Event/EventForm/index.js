import React, { Component, Fragment } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
    description: "",
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({ ...this.props.selectedEvent });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
  };
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { handleFormCancel } = this.props;
    const { title, date, city, venue, hostedBy, description } = this.state;
    return (
      <Fragment>
        <Segment>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input
                name="title"
                value={title}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                name="city"
                value={city}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                name="venue"
                value={venue}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                name="hostedBy"
                value={hostedBy}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.TextArea
              label="Description"
              name="description"
              value={description}
              onChange={this.handleInputChange}
            />

            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={handleFormCancel}>
              Cancel
            </Button>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}

export default EventForm;
