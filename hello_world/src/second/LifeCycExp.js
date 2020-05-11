import React, { Component } from "react";

class LifeCycExp extends Component {
  // 1.  We can initialize sate or bind function inside constructor
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      ylabel: "Hello",
    };
  }
  // 2. The static function will update the state with props from its parent.
  // We will need to return the updated state.
  static getDerivedStateFromProps(props, state) {
    return {
      number: props.number,
    };
  }

  // 3. The render method will create the HTML
  render() {
    return <div id="number">{this.state.number}</div>;
  }
  // 4. The componentDidMount() method will be execute after the render is completed.
  // We can use DOM inside the method.
  componentDidMount() {
    const div_element = document.getElementById("number");
    div_element.innerHTML = "HTML";
  }
}

export default LifeCycExp;
