import React from 'react'
import NavigationItem from './NavigationItem'
import { Nav } from 'reactstrap'

import styles from '../../stylesheets/Navigation.module.css'

const navigation = props => {
  let navStyle = styles.Navigation + " justify-content-center"
  return (
    <Nav className={navStyle}>
      {props.navList.map(navItem => (
        <NavigationItem path={navItem.path} title={navItem.title} key={navItem.id} />
      ))}
    </Nav>
  )
}
export default navigation