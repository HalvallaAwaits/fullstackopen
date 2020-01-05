import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Display = props => {
  return (
    <div>
      {props.type} {props.count}
    </div>
  );
};

const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodReview = () => setGood(good + 1);
  const addNeutralReview = () => setNeutral(neutral + 1);
  const addBadReview = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => addGoodReview()} text="good" />
      <Button handleClick={() => addNeutralReview()} text="neutral" />
      <Button handleClick={() => addBadReview()} text="bad" />
      <h2>review stats</h2>
      <Display type="good" count={good} />
      <Display type="neutral" count={neutral} />
      <Display type="bad" count={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
