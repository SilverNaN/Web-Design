import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  Increment = () => {
    this.setState(
      (prevState) => {
        return {
          counter: prevState.counter + 1,
        };
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Counter - {this.state.counter}</h1>
        <button onClick={this.Increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
