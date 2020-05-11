import React from "react";
import counterHOC from "./counterHOC";

function CounterBtn(props) {
  const { count, increment } = props;
  return <button onClick={increment}>Clicked {count} Times</button>;
}

export default counterHOC(CounterBtn, 3);
