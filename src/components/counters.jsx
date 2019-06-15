import React, { Component } from "react";
import Counter from "./counter";
/*  IMPORTANT !!
    modified the state should only be done within the component which owns the state 
    */
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id} //key is an internal use key value by React
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
