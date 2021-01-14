import React, { useState } from 'react'
import { Container } from '../Styles/NavStyle'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState('close')
  return (
    <Container>
      <div>
        <div className='header'>
          <div className='link'>
            <a href='/'>
              <span
                style={{
                  borderLeft: '4px solid #777778',
                  borderTop: '4px solid #777778'
                }}
              >
                M
              </span>
              una
            </a>
          </div>
          <div
            className='burgermenu'
            role='button'
            onClick={() => setToggle(toggle === 'open' ? 'close' : 'open')}
          >
            <i className={toggle}></i>
            <i className={toggle}></i>
            <i className={toggle}></i>
          </div>
          <div className='image'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMy7wxbiv-US5hUiRSQCwUNh4gtn4SjCppbQ&usqp=CAU'
              alt='tech bro'
              width='20%'
            />
          </div>
        </div>
        <div className='nav-items'>
          {toggle === 'open' && (
            <div className='list-items'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/portfolio'>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to='/resume'>Resume</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Navbar
