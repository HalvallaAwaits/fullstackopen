﻿import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  const rows = () => {
    return course.parts.map(part => (
      <Part key={part.id} part={part.name} exercises={part.exercises} />
    ));
  };

  return <div>{rows()}</div>;
};

export default Content;
