import { useState } from "react";

const StatisticRow = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};
const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      {props.good + props.neutral + props.bad > 0 ? (
        <table>
          <tbody>
            <StatisticRow text="good" value={props.good} />
            <StatisticRow text="neutral" value={props.neutral} />
            <StatisticRow text="bad" value={props.bad} />
            <TotalRow
              good={props.good}
              neutral={props.neutral}
              bad={props.bad}
            />
            <AverageRow
              good={props.good}
              neutral={props.neutral}
              bad={props.bad}
            />
            <PositiveRow
              good={props.good}
              neutral={props.neutral}
              bad={props.bad}
            />
          </tbody>
        </table>
      ) : (
        <div>No feeback given</div>
      )}
    </>
  );
};

const TotalRow = (props) => (
  <tr>
    <td>all</td>
    <td>{props.good + props.neutral + props.bad}</td>
  </tr>
);

const AverageRow = (props) => (
  <tr>
    <td>average</td>
    <td>{(props.good + props.neutral + props.bad) / 3}</td>
  </tr>
);

const PositiveRow = (props) => {
  return (
    <tr>
      <td>positive</td>
      <td>{`${
        (100 * props.good) / (props.good + props.neutral + props.bad)
      } %`}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
