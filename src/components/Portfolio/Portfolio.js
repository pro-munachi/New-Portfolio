import React from 'react'

import Navbar from '../Navbar/Navbar'
import PortfolioMap from './Portfoliomap'

function Portfolio() {
    return(
        <div>
            <Navbar 
            bgcolor={'#0f3959'}
            color={'white'}/>
             <br /><br />
             <div style={{marginTop: '10%', textAlign: 'center', color: '#0f3959'}}>
                 <h1>View The Works I Have Done Below</h1>
             </div>
            <PortfolioMap />
        </div>
    )
}

export default Portfolio