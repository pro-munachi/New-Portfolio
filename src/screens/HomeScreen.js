import React from 'react'
import Home from '../component/Home'
import Portfolio from '../component/Portfolio'

const HomeScreen = () => {
  return (
   <div style={{display: 'flex'}}>
        <Home />
        <Portfolio />
   </div>
  )
}

export default HomeScreen
