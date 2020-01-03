import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [value, setValue] = useState(10);

  const setToValue = newValue => () => {
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>zero</button>
      <button onClick={setToValue("hi")}>hi</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
