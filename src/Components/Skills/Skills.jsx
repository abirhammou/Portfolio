import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className='skills'>
      <div className='container'>
        <div className='title center'>
          <h2>Skills</h2>
        </div>
        <div className='skills-items'>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>Angular</p>
              <p>70%</p>
            </div>
            <div className='progress-line' data-percent="70%">
              <span style={{width: "70%"}}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>ReactJS</p>
              <p>50%</p>
            </div>
            <div className='progress-line' data-percent="50%">
              <span style={{width: "50%"}}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>Spring Boot</p>
              <p>80%</p>
            </div>
            <div className='progress-line' data-percent="80%">
              <span style={{width: "80%"}}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>SQL Server</p>
              <p>70%</p>
            </div>
            <div className='progress-line' data-percent="90%">
              <span style={{width: "70%"}}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>MongoDB</p>
              <p>60%</p>
            </div>
            <div className='progress-line' data-percent="60%">
              <span style={{width: "60%"}}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>Java</p>
              <p>70%</p>
            </div>
            <div className='progress-line' data-percent="70%">
              <span style={{width: "70%"}}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>Python</p>
              <p>70%</p>
            </div>
            <div className='progress-line' data-percent="70%">
              <span style={{width: "70%"}}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>TypeScript</p>
              <p>60%</p>
            </div>
            <div className='progress-line' data-percent="60%">
              <span style={{width: "60%"}}></span>
            </div>
          </div>

          <div className='skills-item'>
            <div className='skills-info'>
              <p>C</p>
              <p>70%</p>
            </div>
            <div className='progress-line' data-percent="70%">
              <span style={{width: "70%"}}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills