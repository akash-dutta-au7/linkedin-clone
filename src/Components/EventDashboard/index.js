import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class EventDashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <h1>Events</h1>
          </Grid.Column>
          <Grid.Column width={6}>
            <h1>Notification</h1>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
