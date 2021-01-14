import React from 'react'
import { Container } from '../Styles/ResumeStyle'
import Data from './ResumeData'

const Resume = () => {
  return (
    <Container>
      <div className='resume'>
        <div className='info'>
          <div className='header'>
            <h1>My Resume</h1>
          </div>
          <div className='tech'>
            <h2>Technologies</h2>
            <p>
              I am conversant with the following technologies: Html, Css,
              Javascript, React, Redux, Bootstrap, Styled-Components, Github,
              Git, Nodejs, Express, MongoDb, Postman, Heroku.
            </p>
          </div>
          <div className='experience'>
            <h2>Experiences</h2>
            <div className='shop'>
              {Data.map(exp => (
                <div className='map' key={exp.id}>
                  <h3>{exp.label}</h3>
                  <li>{exp.desc}</li>
                  <li>{exp.p1}</li>
                  <li>{exp.p2}</li>
                  <li>{exp.p3}</li>
                </div>
              ))}
            </div>
          </div>
          <div className='education'>
            <h2>Certification</h2>
            <li>
              I completed the Responsive Web Design Classes from freecodecamp.
              You can view the certificate here{' '}
              <a
                href='https://freecodecamp.org/certification/munachiso/responsive-web-design'
                target='_blank'
                rel='noopener noreferrer'
              >
                freecodecamp
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className='space'>
        <p>muna</p>
      </div>
    </Container>
  )
}

export default Resume
