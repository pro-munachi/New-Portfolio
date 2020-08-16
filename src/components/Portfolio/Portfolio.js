import React from 'react'

import Navbar from '../Navbar/Navbar'
import PortfolioMap from './Portfoliomap'
import Hero from '../Hero/Hero'

function Portfolio() {
    return(
        <div>
            <Navbar 
            color={'#f3dbcf'}/>
            <Hero 
            image={'https://media.istockphoto.com/photos/black-bricks-3d-rendering-picture-id1207979387?b=1&k=6&m=1207979387&s=170667a&w=0&h=YXlGnUgUtQ6LIgQlDETtEEz39T5SR_s3lWGfljHg6Qc='}
            height={'80vh'}
            title={'Welcome To My Portfolio Page'}
            sub={'View My Works Below'}
            contact={'Contact Me'}
            /> <br />
            <PortfolioMap />
        </div>
    )
}

export default Portfolio