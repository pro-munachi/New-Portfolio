import React from 'react'
import { Container } from '../Styles/HomeStyle'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <div className='desktop'>
        <div className='heading'>
          <div className='intro'>
            <h1>
              <h1 style={{ color: 'white', margin: '0', padding: '0' }}>
                HELLO,
              </h1>
              I AM{' '}
              <span style={{ color: 'white', margin: '0', padding: '0' }}>
                Munachi
              </span>
            </h1>
            <p className='text'>
              I am a <span style={{ color: 'white' }}>frontend</span> web
              developer who enjoys coding and is open for new{' '}
              <span style={{ color: 'white' }}>challenges</span>. I am familiar
              with the following technologies: Html, Css,{' '}
              <span style={{ color: 'white' }}>Styled-Components</span>,
              Bootstrap, Javascript,{' '}
              <span style={{ color: 'white' }}>React</span>, Redux e.t.c
            </p>
          </div>
          <div className='links'>
            <p className='link'>
              {' '}
              1.0
              <NavLink activeClassName='line' to='/' exact>
                <p className='link-name'>Portfolio</p>
              </NavLink>
            </p>
            <p className='link'>
              {' '}
              2.0
              <NavLink activeClassName='line' to='/' exact>
                <p className='link-name'>Resume</p>
              </NavLink>
            </p>
            <p className='link'>
              {' '}
              3.0
              <NavLink activeClassName='line' to='/' exact>
                <p className='link-name'>Contact</p>
              </NavLink>
            </p>
          </div>
          <div className='footer'>
            <div className='social'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMy7wxbiv-US5hUiRSQCwUNh4gtn4SjCppbQ&usqp=CAU'
                alt='tech bro'
                className='image'
              />
              <div className='social-link'>
                <p>
                  <i class='fab fa-github'></i>
                  <a
                    href='https://github.com/pro-munachi'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </p>

                <p>
                  <i class='fab fa-linkedin-in'></i>
                  <a
                    href='https://www.linkedin.com/in/munachiso'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LinkedIn
                  </a>
                </p>

                <p>
                  <i class='fab fa-twitter'></i>
                  <a
                    href='https://twitter.com/Munachiiso'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Twitter
                  </a>
                </p>
              </div>
            </div>
            <div className='inspire'>
              inspired by
              <a
                href='https://kadet.dev/'
                target='_blank'
                rel='noopener noreferrer'
              >
                kadet
              </a>
            </div>
          </div>
          <div className='copy'>copyright &copy; Munachi</div>
        </div>
      </div>
    </Container>
  )
}

export default Home
