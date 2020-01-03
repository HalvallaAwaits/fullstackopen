import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [counter, setCounter] = useState(0);
  const setToValue = value => () => setCounter(value);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={setToValue(counter + 1)} text="increment" />
      <Button onClick={setToValue(counter - 1)} text="decrement" />
      <Button onClick={setToValue(0)} text="reset" />
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

ReactDOM.render(<App />, document.getElementById("root"));
