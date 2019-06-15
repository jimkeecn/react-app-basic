import React, { Component } from "react";

/* 
Prop is ready only property that cannot be change inside the child component,
you can only change the state.
*/
class Counter extends Component {
  render() {
    console.log(this.props);
    const { onIncrement, onDelete, counter } = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    const x = "Zero";
    return count === 0 ? x : count;
  }
}

export default Counter;
