import React from 'react'
import { NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import styles from '../../stylesheets/Navigation.module.css'

const navigationItem = props => (
  <NavItem className={styles.NavigationItem}><NavLink><Link to={props.path}>{props.title}</Link></NavLink></NavItem>
)

export default navigationItem