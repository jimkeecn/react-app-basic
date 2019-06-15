import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          NavBar{" "}
          <span className="badge badge-pull badge-secondary">
            {this.props.totalCountersHasValue}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
