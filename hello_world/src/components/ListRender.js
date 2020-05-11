import React from "react";
import ListItem from "./ListItem";

const persons = [
  {
    name: "Joan",
    age: 28,
    skills: "React",
  },
  {
    name: "peter",
    age: 38,
    skills: "All",
  },
  {
    name: "John",
    age: 20,
    skills: "Nothing",
  },
];

function ListRender() {
  let constList = persons.map((person, i) => (
    <ListItem key={i} stuff={person} />
  ));
  // Here we use curly braces to indicate the content is javascript to be evaluated.
  return <div>{constList}</div>;
}

export default ListRender;
