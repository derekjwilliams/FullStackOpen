import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [anecdoteVotes, setAncedoteVotes] = useState(
    new Array(anecdotes.length).fill(0)
  );
  // setArtists( // Replace the state
  // [ // with a new array
  // ...artists, // that contains all the old items
  // { id: nextId++, name: name } // and one new item at the end
  // ]
  const handleAnecdoteVote = () => {
    const copy = [...anecdoteVotes];
    copy[selected] += 1;
    setAncedoteVotes(copy);
  };

  const handleRandomAnecdoteClick = () => {
    setSelected(Math.round(Math.round(Math.random() * (anecdotes.length - 1))));
  };
  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {anecdoteVotes[selected]} votes</div>
      <br></br>
      <button onClick={handleAnecdoteVote}>vote</button>
      <button onClick={handleRandomAnecdoteClick}>next ancedote</button>
    </div>
  );
};

export default App;
