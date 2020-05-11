import React, { Component } from "react";

class LoggingInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogIn: false,
    };
  }
  render() {
    // // First method of conditional rendering
    // if (this.state.isLogIn){
    //     return <div>Welcome Zhongjie</div>;
    // }else{
    //     return <div>Welcome Guest</div>;
    // }

    // Just switch between the content
    // Note that the JSX is an element from React. It can be treated as a value.
    // let message = "";
    // if (this.state.isLogIn) {
    //   message = <div>Welcome Zhongjie</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return message;

    // // User Tenacy operator
    // let message = this.state.isLogIn ? (
    //   <div>Welcome Zhongjie</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // return message;
    // Or simply put as
    return this.state.isLogIn ? (
      <div>Welcome Zhongjie</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default LoggingInfo;
