import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Button clicked You");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>ClickYou</button>
      </div>
    );
  }
}

export default ClassClick;
