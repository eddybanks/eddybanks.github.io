import React from 'react' 
import ResumeSection from './ResumeSection.js'
import styles from '../../stylesheets/Resume.module.css'
import vars from '../../stylesheets/Variables.module.css'

const resume = (props) => {
  let sectionStyle = styles.Resume + " " + vars.Dosis
  return (
    <div className={styles.ResumeBox}>
      <div className={sectionStyle}>
        {props.page.map(section => (
          <ResumeSection title={section.title} content={section.content} key={section.id} />
        ))}
      </div>
    </div>
  )
}

export default resume 