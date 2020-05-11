import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to {this.props.people[0].Degree} </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
