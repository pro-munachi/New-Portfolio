import React from 'react'
import Home from '../component/Home'
import Resume from '../component/Resume'
import Navbar from '../component/Navbar'
import { Contain } from '../Styles/HomeStyle'

const ResumeScreen = () => {
  return (
    <Contain>
      <div className='desktop'>
        <Home />
        <Resume />
      </div>
      <div className='mobile'>
        <Navbar />
        <Resume />
      </div>
    </Contain>
  )
}

export default ResumeScreen
