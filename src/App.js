import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Error from './components/Error/Error'
import HomeScreen from './screens/HomeScreen'
import PortfolioScreen from './screens/PortfolioScreen'
//import ContactScreen from './screens/ContactScreen'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/portfolio' component={PortfolioScreen} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
