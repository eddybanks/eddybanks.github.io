import React from 'react'
import Project from './Project/Project'

const projects = (props) => {
  return (
    <div>
      {props.projects.map(project => <Project img={project.src} alt={project.alt} title={project.title} />)}      
    </div>
  )
}

export default projects