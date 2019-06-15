import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - constructor", this.props);
  }

  componentDidMount() {
    //called after Component is rendered into the DOM, e.g usually put ajax call from the server
    console.log("App - mounted");
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters }); // or this.setState({ counters }); this means counters = counters
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    console.log("event handler called(Delete)", counterId);
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCountersHasValue={
            this.state.counters.filter(c => c.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
