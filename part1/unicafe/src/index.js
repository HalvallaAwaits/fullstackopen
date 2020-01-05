import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Display = props => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const addGoodReview = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const addNeutralReview = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const addBadReview = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  const avg = () => (good - bad) / total;
  const positive = () => (good / total) * 100 + "%";

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => addGoodReview()} text="good" />
      <Button handleClick={() => addNeutralReview()} text="neutral" />
      <Button handleClick={() => addBadReview()} text="bad" />
      <h2>review stats</h2>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="total" value={total} />
      <Display text="average" value={avg()} />
      <Display text="positive" value={positive()} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
