import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({course}) => {
  // eslint-disable-next-line
  const { name, parts } = course
  return (
    <div>
      { parts.map(part => <Part part={part} />) }
    </div>
  )
}

const Total = ({course}) => {
  // eslint-disable-next-line
  const { name, parts } = course
  let total = 0
  parts.forEach(part => total += part.exercises)
  return (
    <p>
      Number of exercises { total }
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))