import React, { Component, Fragment } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class EventForm extends Component {
  render() {
    const { handleIsOpenToggle } = this.props;
    return (
      <Fragment>
        <Segment>
          <Form>
            <Form.Field>
              <label>Event Title</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input type="date" />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input />
            </Form.Field>
            <Form.TextArea label="Description" />

            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={handleIsOpenToggle}>
              Cancel
            </Button>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}

export default EventForm;
