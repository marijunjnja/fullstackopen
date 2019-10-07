import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({stats}) => {
  let all = stats.good + stats.neutral + stats.bad
  let total = (stats.good * 1) + (stats.neutral * 0) + (stats.bad * -1)
  let average = total / all
  let positive = `${(stats.good / all) * 100} %`

  if (!all) return <p>No feedback given</p>
  else {
    return (
      <div>
        <table>
          <tbody>
            <Statistic text='good' value={stats.good} />
            <Statistic text='neutral' value={stats.neutral} />
            <Statistic text='bad' value={stats.bad} />
            <Statistic text='all' value={all} />
            <Statistic text='average' value={average} />
            <Statistic text='positive' value={positive} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = (props) => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  let stats = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <Heading text='give feedback' />
      <div>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      </div>
      <Heading text='statistics' />
      <Statistics stats={stats} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)