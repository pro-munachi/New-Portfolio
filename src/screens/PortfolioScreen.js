import React from 'react'
import { Contain } from '../Styles/HomeStyle'
import Home from '../component/Home'
import Portfolio from '../component/Portfolio'
import Navbar from '../component/Navbar'

const PortfolioScreen = () => {
  return (
    <Contain>
      <div className='desktop'>
        <Home />
        <Portfolio />
      </div>
      <div className='mobile'>
        <Navbar />
        <Portfolio/>
      </div>
    </Contain>
  )
}

export default PortfolioScreen
