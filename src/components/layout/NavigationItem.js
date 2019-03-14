import React from 'react'
import { NavItem, NavLink } from 'reactstrap'
import { NavLink as Link } from 'react-router-dom'
import styles from '../../stylesheets/Navigation.module.css'

const navigationItem = props => (
  <NavItem className={styles.NavigationItem}><Link to={props.path} activeClassName={styles.Active}><NavLink>{props.title}</NavLink></Link></NavItem>
)

export default navigationItem