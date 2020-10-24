import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./index.css";

class LandingSignin extends Component {
  render() {
    return (
      <div>
        <form className="form-group">
          <input type="email" placeholder="Email ID" />
          <input type="password" placeholder="Password" />

          <button type="submit" className="landing-signin-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LandingSignin;
