import React, { Component } from "react";

//Stateless functional Component
const NavBar = ({ totalCountersHasValue }) => {
  // have to pass the props into stateless functional components
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pull badge-secondary">
          {totalCountersHasValue}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
