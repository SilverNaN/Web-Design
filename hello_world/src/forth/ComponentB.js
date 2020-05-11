import React, { Component } from "react";
import { UserConsumer } from "./contextUser";
// We need to return the JSX which is wrapped in the UserConsumer. The UserConsumer should wrap a function which has parameter as the value from ancenstor and a body which return JSX and use the parameter.
export class ComponentB extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return (
            <div>
              <h1>Display the parent property: {username}</h1>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentB;
