//Parent component with declared ref and passing to child realization

import React, { Component } from "react";
import RefForward from "./RefForward";

class RefParent extends Component {
  constructor(props) {
    super(props);

    this.childRef = React.createRef();
    this.childRefMethod = this.childRefMethod.bind(this);
  }

  childRefMethod() {
    //this.childRef.current.onClickMethod();
    this.childRef.current.focus();
  }

  render() {
    return (
      <div>
        <RefForward ref={this.childRef} />
        <button onClick={this.childRefMethod}>Change Child</button>
      </div>
    );
  }
}

export default RefParent;
