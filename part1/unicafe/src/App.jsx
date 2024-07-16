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
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
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
          <table>
            <tbody>
              <StatisticLine text="good" value={props.good} />
              <StatisticLine text="neutral" value={props.neutral} />
              <StatisticLine text="bad" value={props.bad} />
              <StatisticLine text="all" value={props.total} />
              <StatisticLine text="average" value={props.average} />
              <StatisticLine text="positive" value={`${props.positive} %`} />
            </tbody>
          </table>
        )
      }
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

export default App