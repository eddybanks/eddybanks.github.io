import React, { Fragment } from 'react'
import styles from '../../../stylesheets/Projects.module.css'

const Project = props => {
  return (
    <Fragment>
      <div className={styles.Project}>
        <img src={props.img.src} alt={props.img.alt} />
        <h3>{props.title}</h3>
      </div>
    </Fragment>
  )
}

export default Project