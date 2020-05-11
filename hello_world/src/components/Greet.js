import React from "react";

const GreetMsg = (props) => {
  return (
    <div>
      <h1>Hello {props.people[0].firstName}</h1>
      {props.children}
    </div>
  );
};

//export default GreetMsg;

const Greeting = ({ firstName, lastName }) => {
  return (
    <div>
      <h1>
        Hello {firstName} and {lastName}
      </h1>
    </div>
  );
};
//export default Greeting;

const Greetinga = (props) => {
  const { firstName, lastName } = props;
  return (
    <div>
      <h1>
        Hello {firstName} and {lastName}
      </h1>
    </div>
  );
};
export default Greetinga;
