import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistic = props => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

const Statistics = props => {
  if (props.data.total === 0) {
    return (
      <div>
        <p>There is no feedback!</p>
      </div>
    );
  } else {
    return (
      <div>
        <Statistic text="good" value={props.data.good} />
        <Statistic text="neutral" value={props.data.neutral} />
        <Statistic text="bad" value={props.data.bad} />
        <Statistic text="total" value={props.data.total} />
        <Statistic text="average" value={props.data.average} />
        <Statistic text="positive" value={props.data.positive} />
      </div>
    );
  }
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

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    average: avg(),
    positive: positive()
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => addGoodReview()} text="good" />
      <Button handleClick={() => addNeutralReview()} text="neutral" />
      <Button handleClick={() => addBadReview()} text="bad" />
      <h2>review stats</h2>
      <Statistics data={stats}></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
