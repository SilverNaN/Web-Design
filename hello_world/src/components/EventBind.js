import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  Increment() {
    // this is undefined inside the eventhandler
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={this.Increment.bind(this)}>ClickMe</button>
      </div>
    );
  }
}

export default EventBind;
