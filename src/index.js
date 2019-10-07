import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({text}) => ( <h1>{text}</h1> )

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  const [ selected, setSelected ] = useState(0)
  const [ points, setPoints ] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
  const [ most, setMost ] = useState(null)

  const handleNext = () => setSelected(Math.floor(Math.random() * 6))

  const handleVote = () => {
    const copy = { ...points }
    copy[selected] += 1
    setPoints(copy)
    setMost(Object.keys(copy).reduce((a, b) => copy[a] > copy[b] ? a : b))
  }

  return (
    <div>
      <Heading text='Anecdote of the day' />
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleNext} text='next anecdote' />
      <Heading text='Anecdote with most votes' />
      <p>{props.anecdotes[most]}</p>
      <p>has {points[most]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)