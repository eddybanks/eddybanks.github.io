import React, { Fragment } from 'react'
import styles from '../../stylesheets/Header.module.css'
import Navigation from './Navigation'

const header = (props) => (
  <Fragment>
    <header className={styles.Header}>
      <h4>{props.title}</h4>
      <h2>{props.name}</h2>
      <Navigation navList={props.navList} />
    </header>
  </Fragment>
)

export default header