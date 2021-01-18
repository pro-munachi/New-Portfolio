import React from 'react'
import Home from '../component/Home'
import MobileHome from '../component/MobileHome'
import Portfolio from '../component/Portfolio'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Contain } from '../Styles/HomeStyle'

const HomeScreen = () => {
  return (
    <Contain>
      <div className='desktop'>
        <Home />
        <Portfolio />
      </div>
      <div className='mobile'>
        <div className='vh'>
          <Navbar />
          <MobileHome />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Contain>
  )
}

export default HomeScreen
