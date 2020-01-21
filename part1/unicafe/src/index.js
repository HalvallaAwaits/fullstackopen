import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
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
        <table>
          <tr>
            <td>good</td>
            <td>{props.data.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.data.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.data.bad}</td>
          </tr>
          <tr>
            <td>total</td>
            <td>{props.data.total}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{props.data.average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{props.data.positive}</td>
          </tr>
        </table>
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

  const avg = () => ((good - bad) / total).toFixed(2);
  const positive = () => ((good / total) * 100).toFixed(2) + "%";

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
      <h2>Statistics</h2>
      <Statistics data={stats}></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
