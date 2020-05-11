import React, { Component } from "react";

class ReactRef extends Component {
  constructor(props) {
    super(props);
    this.f1Ref = React.createRef();
    this.onClickMethod = this.onClickMethod.bind(this);
  }

  onClickMethod() {
    this.f1Ref.current.innerHTML = "Value change due to click";
  }

  render() {
    return (
      <div ref={this.f1Ref}>
        <h1 onClick={this.onClickMethod}>This is the content.</h1>
      </div>
    );
  }
}

export default ReactRef;
