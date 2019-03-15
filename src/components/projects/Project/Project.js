import React, { Fragment } from 'react'
import styles from '../../../stylesheets/Projects.module.css'
import { Card } from 'reactstrap'

const Project = props => {
  return (
    <Fragment>
      <div className={styles.Project}>
        <img src={props.src} alt={props.alt} />
        <h3>{props.title}</h3>
      </div>
    </Fragment>
  )
}

export default Project