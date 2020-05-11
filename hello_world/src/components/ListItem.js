import React from "react";

function ListItem(props) {
  return (
    <div>
      I am {props.stuff.name} and I am {props.stuff.age} years old. I know{" "}
      {props.stuff.skills}.
    </div>
  );
}

export default ListItem;
