import React from 'react'

const about = (props) => (
  <div>
    <header>
      <h3>{props.title}</h3>
    </header>
    {props.content.map( text => (
      <p>{text}</p>
    ))}
  </div>
)

export default about