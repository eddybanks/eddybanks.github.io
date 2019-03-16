import React from 'react'
import styles from '../../stylesheets/Resume.module.css'

const resumeSection = props => (
  <div className={styles.ResumeSection}>
    <h4>{props.title}</h4>
    {props.content.map(line => (
      <p>{line}</p>
    ))}
  </div>
)

export default resumeSection