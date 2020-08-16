import React from 'react'

import Navbar from '../Navbar/Navbar'
import PortfolioMap from './Portfoliomap'

function Portfolio() {
    return(
        <div>
            <Navbar 
            bgcolor={'#aac9ce'}
            color={'black'}/><br /><br /><br />
            <PortfolioMap />
        </div>
    )
}

export default Portfolio