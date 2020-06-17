import React from 'react';
import {Div} from './styled'

import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import Slider from './Carousel/Slider'

function Home() {
    return(
        <Div>
            <Navbar />
            <Hero 
            image={'https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008__340.jpg'}
            height={'80vh'}
            title={'Hi, I am Madu Stanley Munachiso'}
            sub={"A Front-End Developer"}
            /><br />
            <Slider />       
            <div>

            </div>
        </Div>
    )
}

export default Home;