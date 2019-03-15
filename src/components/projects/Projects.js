import React from 'react'
import Project from './Project/Project'
import styles from '../../stylesheets/Projects.module.css';

const projects = (props) => {
  return (
    <div className={styles.Projects}>
      {props.projects.map(project => <Project img={project.src} alt={project.alt} title={project.title} key={project.id} />)}      
    </div>
  )
}

export default projects