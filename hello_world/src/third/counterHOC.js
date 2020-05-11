import React from "react";

const counterHOC = (OriginalComponent, critical_number) => {
  class UpdatedComponent extends React.Component {
    // Here the state and the function are going to be re-used.
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => {
        return { counter: prevState.counter + critical_number };
      });
    };
    // return the OriginalComponent and passing props
    render() {
      return (
        <OriginalComponent
          count={this.state.counter}
          incrementCounter={this.incrementCounter}
          {...this.props}
        />
      );
    }
  }
  // Return the created component
  return UpdatedComponent;
};
// Export the whole function.
export default counterHOC;
