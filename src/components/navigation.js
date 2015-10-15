import React from "react";
import {Navbar, NavBrand} from "react-bootstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar toggleNavKey={0}>
        <NavBrand>Github Events</NavBrand>
      </Navbar>
    )
  };
}

