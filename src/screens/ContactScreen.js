import React from 'react'
import Home from '../component/Home'
import Contact from '../component/Contact'
import Navbar from '../component/Navbar'
import { Contain } from '../Styles/HomeStyle'

const ContactScreen = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Contain>
        <div className='desktop'>
          <Home />
          <Contact />
        </div>
        <div className='mobile'>
          <Navbar />
          <Contact />
        </div>
      </Contain>
    </div>
  )
}

export default ContactScreen
