import React, { Component } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { AiOutlineCodepen } from "react-icons/ai";

class Navbar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header className="menu-item-logo">
            <AiOutlineCodepen size={25} style={{ marginRight: "1rem" }} />
            Catch Up
          </Menu.Item>
          <Menu.Item name="Events" />
          <Menu.Item>
            <Button floated="right" positive inverted content="Create Event" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
