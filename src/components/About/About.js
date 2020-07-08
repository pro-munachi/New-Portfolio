import React from 'react'
import {NavLink} from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Slider from './Slider/Slide'
import Hero from '../Hero/Hero'
import {Div} from './styled'



function About() {
    return(
        <Div>
            <Navbar />
            <Hero 
            image={'https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg'}
            height={'70vh'}
            title={'Hi, I am Madu Stanley Munachiso'}
            sub={"A Front-End Developer"}
            contact={'Contact Me'}
            portfolio={'Portfolio'}
            />   
            <Slider />
            <div className='but'>
                <h1>Want To Talk To Me About Creating A Website?</h1>
                <button><NavLink to='contact'>Get In Touch</NavLink></button>
            </div>
        </Div>
    )
}

export default About