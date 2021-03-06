import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const DisplayAnecdote = props => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[props.selected]}</p>
      <p>has {props.votes[props.selected]} votes</p>
    </div>
  );
};

const DisplayHighest = props => {
  let indexOfHighest = props.votes.indexOf(Math.max(...props.votes));

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[indexOfHighest]}</p>
      <p>has {props.votes[indexOfHighest]} votes</p>
    </div>
  );
};

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const showRandomQuote = anecdotes => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteForQuote = selected => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <DisplayAnecdote votes={votes} selected={selected} />
      <div>
        <Button handleClick={() => voteForQuote(selected)} text="vote" />
        <Button
          handleClick={() => showRandomQuote(anecdotes)}
          text="random quote"
        />
      </div>
      <DisplayHighest votes={votes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
