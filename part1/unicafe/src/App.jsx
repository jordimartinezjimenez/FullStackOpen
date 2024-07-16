import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good * 100) / total

  const handleClickGood = () => {
    setGood(prevGood => prevGood + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1)
  }

  const handleClickBad = () => {
    setBad(prevBad => prevBad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

const Statistics = (props) => {
  return (
    <>
      {!props.total ?
        <p>No feedback given</p>
        : (
          <div>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.total}</p>
            <p>average {props.average}</p>
            <p>positive {props.positive} %</p>
          </div>
        )
      }
    </>
  )
}

export default App