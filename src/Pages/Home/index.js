import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={3}>
          <h2>left column</h2>
        </Grid.Column>
        <Grid.Column width={9}>
          <h2>Main column</h2>
        </Grid.Column>
        <Grid.Column width={4}>
          <h2>right column</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
