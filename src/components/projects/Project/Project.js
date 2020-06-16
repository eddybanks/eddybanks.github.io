import React from 'react'
import styles from '../../../stylesheets/Projects.module.css'
import { Card, CardImg, CardTitle } from 'reactstrap'

const Project = props => {
  return (
    <Card className='mt-5'>
      <CardImg top width="100%" src={props.img.src} alt={props.img.alt} />
      <CardTitle><a href={props.url} target="_blank">{props.title}</a></CardTitle>
    </Card>
  )
}

export default Project