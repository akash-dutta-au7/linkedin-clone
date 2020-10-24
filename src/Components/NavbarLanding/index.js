import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import "./index.css";
import Logo from "../../Assets/linkedin.png";
class NavbarLanding extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={9}>
            <img src={Logo} alt="" />
          </Grid.Column>
          <Grid.Column width={5} className="buttons-grp">
            <Button>Join now</Button>{" "}
            <Button basic color="blue" content="Sign In" />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default NavbarLanding;
