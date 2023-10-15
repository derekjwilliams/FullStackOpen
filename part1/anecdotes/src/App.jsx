import { useState } from "react";

const Anecdote = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdote}</div>
    </div>
  );
};
const AnecdoteVote = (props) => {
  return <div>has {props.anecdoteVote} votes</div>;
};

const MostPopularAnecdote = (props) => {
  const anecdoteWithMostIndex = props.anecdoteVotes.indexOf(
    Math.max(...props.anecdoteVotes)
  );
  const mostPopularAnecdote = props.anecdotes[anecdoteWithMostIndex];
  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      <p>{mostPopularAnecdote}</p>
    </div>
  );
};

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
  const [anecdoteVotes, setAnecdoteVotes] = useState(
    new Array(anecdotes.length).fill(0)
  );

  const handleAnecdoteVote = () => {
    const copy = [...anecdoteVotes];
    copy[selected] += 1;
    setAnecdoteVotes(copy);
  };

  const handleRandomAnecdoteClick = () => {
    setSelected(Math.round(Math.round(Math.random() * (anecdotes.length - 1))));
  };

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} />
      <AnecdoteVote anecdoteVote={anecdoteVotes[selected]} />
      <br></br>
      <button onClick={handleAnecdoteVote}>vote</button>
      <button onClick={handleRandomAnecdoteClick}>next anecdote</button>
      <MostPopularAnecdote
        anecdotes={anecdotes}
        anecdoteVotes={anecdoteVotes}
      />
    </div>
  );
};

export default App;
