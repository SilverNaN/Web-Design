// Receive function and parameters and assign value to return to parent

import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      child: "Avery",
    };
  }
  /*
  1. The button onClick attr is a arrow function, which is considered as a handle
  2. The incoming this.props is deconstructed with the EXACT name from the Parent component.
  3. the decomposed function is used to feed the info from Parent and state from Child.
  We can think of as if the function call here is considered feed the two info from Child to Parent and call the function in parent.
  */
  render() {
    return (
      <div>
        <button
          onClick={() => {
            const { functions, parents } = this.props;
            console.log(this.props);
            functions(parents, this.state.child);
          }}
        >
          ClickMe
        </button>
      </div>
    );
  }
}

export default Child;
