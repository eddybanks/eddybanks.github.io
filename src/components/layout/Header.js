import React, { Fragment } from 'react'
import styles from '../../stylesheets/Header.module.css'
import vars from '../../stylesheets/Variables.module.css'
import Navigation from './Navigation'

const header = (props) => (
  <Fragment>
    <header className={styles.Header}>
      <h3>{props.title}</h3>
      <h1 className={vars.Roboto}>{props.name}</h1>
      <Navigation navList={props.navList} />
    </header>
  </Fragment>
)

export default header