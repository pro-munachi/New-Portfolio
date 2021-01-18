import React from 'react'
import { Container } from '../Styles/MobileHomeStyle'
import { Bounce, Roll } from 'react-reveal'

const MobileHome = () => {
  return (
    <Container>
      <div className='home'>
        <Bounce>
          <div className='image'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMy7wxbiv-US5hUiRSQCwUNh4gtn4SjCppbQ&usqp=CAU'
              alt='tech bro'
            />
          </div>
        </Bounce>
        <div className='intro'>
          <Roll>
            <h1>
              <span style={{ color: 'white', margin: '0', padding: '0' }}>
                <span className='h'>H</span>ELLO,
              </span>
              I AM{' '}
              <span style={{ color: 'white', margin: '0', padding: '0' }}>
                <span className='m'>M</span>unachi
              </span>
            </h1>
          </Roll>
          <Bounce>
            <p className='text'>
              I am a <span style={{ color: 'white' }}>frontend</span> web
              developer who enjoys coding and is open for new{' '}
              <span style={{ color: 'white' }}>challenges</span>. I am familiar
              with the following technologies: Html, Css,{' '}
              <span style={{ color: 'white' }}>Styled-Components</span>,
              Bootstrap, Javascript,{' '}
              <span style={{ color: 'white' }}>React</span>, Redux e.t.c
            </p>
          </Bounce>
        </div>
        <Bounce>
          <div className='footer'>
            <div className='social'>
              <div className='social-link'>
                <p>
                  <a
                    href='https://github.com/pro-munachi'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='fab fa-github'
                      style={{ margin: '0 5px' }}
                    ></i>
                    Github
                  </a>
                </p>

                <p>
                  <a
                    href='https://www.linkedin.com/in/munachiso'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='fab fa-linkedin-in'
                      style={{ margin: '0 5px' }}
                    ></i>
                    LinkedIn
                  </a>
                </p>

                <p>
                  <a
                    href='https://twitter.com/Munachiiso'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='fab fa-twitter'
                      style={{ margin: '0 5px' }}
                    ></i>
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </Container>
  )
}

export default MobileHome
