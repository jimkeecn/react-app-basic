import React, { Component } from "react";
import Counter from "./counter";
/*  IMPORTANT !!
    modified the state should only be done within the component which owns the state 
    */
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} //key is an internal use key value by React
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
