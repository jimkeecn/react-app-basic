import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  style = {
    fontSize: "10px",
    fontWeight: "bold"
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    const x = "Zero";
    return count === 0 ? x : count;
  }
}

export default Counter;
