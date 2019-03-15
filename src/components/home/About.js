import React from 'react'
import styles from '../../stylesheets/About.module.css'

const about = (props) => (
  <div>
    <header>
      <h3>{props.title}</h3>
    </header>
    <hr />
    <div className={styles.ContentBox}>
      {props.content.map( text => (
        <p>{text}</p>
      ))}
    </div>
  </div>
)

export default about