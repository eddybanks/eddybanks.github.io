import React from 'react'

const header = (props) => (
  <div>
    <header>
      <h4>{props.title}</h4>
      <h2>{props.name}</h2>
    </header>
  </div>
)

export default header