import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const navigation = props => (
  <Nav justify-content-cent>
    {props.navList.map(navItem => (
      <NavItem><NavLink><Link to={navItem.path}>{navItem.title}</Link></NavLink></NavItem>
    ))}
  </Nav>
)

export default navigation