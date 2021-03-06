import React from 'react'
import { Container } from '../Styles/ContactStyle'
import Zoom from 'react-reveal/Zoom'

const Contact = () => {
  return (
    <Container>
      <div className='contact'>
        <div>
          <Zoom>
            <h1>Contact Me</h1>
          </Zoom>
        </div>
        <form name='contact' method='POST' data-netlify='true'>
          <label>
            <input type='text' placeholder='Full Name' />
          </label>
          <label>
            <input type='email' placeholder='Email Adress' />
          </label>
          <label>
            <input type='number' placeholder='Phone Number' />
          </label>
          <label>
            <textarea placeholder='Write something to me....' />
          </label>
          <label>
            <input type='submit' className='sub' />
          </label>
        </form>
      </div>
    </Container>
  )
}

export default Contact
