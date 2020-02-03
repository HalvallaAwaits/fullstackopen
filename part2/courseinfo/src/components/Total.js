import React from "react";

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (acc, cur) => acc + cur.exercises,
    0
  );

  return <p>Number of exercises {totalExercises}</p>;
};

export default Total;
