import React, { Fragment } from 'react'
import styles from '../../../stylesheets/Projects.module.css'
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

const Project = props => {
  return (
    <Card>
      <CardImg top width="100%" src={props.img.src} alt={props.img.alt} />
      <CardTitle><a href={props.url} target="_blank">{props.title}</a></CardTitle>
    </Card>
  )
}

export default Project