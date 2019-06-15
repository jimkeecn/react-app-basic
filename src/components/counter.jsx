import React, { Component } from "react";

/* 
Prop is ready only property that cannot be change inside the child component,
you can only change the state.
*/
class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = product => {
    console.log("increment clicked", product);
    this.setState({ value: this.state.value + 1 }); //Set State change
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    const x = "Zero";
    return count === 0 ? x : count;
  }
}

export default Counter;
