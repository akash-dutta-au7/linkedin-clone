import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import LandingSignin from "../../Components/LandingSignIn";
import NavbarLanding from "../../Components/NavbarLanding";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <NavbarLanding />
        <Grid>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={8}>
            <LandingSignin />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
