import React from 'react'
import { Container } from '../Styles/ResumeStyle'

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
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Resume
