// Going to have state and will pass function and parameter to child

import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      father: "Zhongjie",
      mother: "Chen",
    };
  }

  familyComposition = (parentName, childName) => {
    console.log(`The ${childName} is the child of ${parentName}.`);
  };

  render() {
    return (
      <div>
        <Child functions={this.familyComposition} parents={this.state.father} />
      </div>
    );
  }
}

export default Parent;
