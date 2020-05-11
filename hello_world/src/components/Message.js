import React, { Component } from "react";

class Message extends Component {
  // The constructor function runs when the class is instantiated.
  constructor() {
    super(); // The super() function call the super class constructor function, which is Component from React
    // The state of this pointer is reserved for React
    this.state = {
      message: "Welcome to the site!",
    };
  }
  changeMessage() {
    // setState method is used to mutate the state of the class. It takes dictionary as function input
    this.setState(
      {
        message: this.props.message, //note that for this pointer, we don't need the {}
      },
      () => {
        console.log(this.props.message);
      }
    );
  }
  // In the JSX, we run the function in the button attribute.
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Message;
