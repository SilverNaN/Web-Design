import React from "react";
import "./StyleTemp.css";

const heading_style = {
  color: "red",
  backGroundColor: "black",
  fontSize: "70px",
};

function StyleExample(props) {
  let option_class = props.option_class ? "optional-content" : "";
  return (
    <div>
      <h1 className="error">This is a stylesheet results.</h1>
    </div>
  );
}

export default StyleExample;
