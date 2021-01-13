import React from 'react'
import { Container } from '../Styles/ContactStyle'

const Contact = () => {
  return (
    <Container>
      <div className='contact'>
        <div>
          <h1>Contact Me</h1>
        </div>
        <form>
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
