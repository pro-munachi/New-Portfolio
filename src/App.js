import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Error from './component/Error'
import HomeScreen from './screens/HomeScreen'
import PortfolioScreen from './screens/PortfolioScreen'
import ResumeScreen from './screens/ResumeScreen'
import ContactScreen from './screens/ContactScreen'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div style={{ background: 'black' }}>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/portfolio' component={PortfolioScreen} />
          <Route path='/resume' component={ResumeScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route component={Error} />
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App
