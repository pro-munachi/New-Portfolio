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
            image={'https://media.istockphoto.com/photos/black-bricks-3d-rendering-picture-id1207979387?b=1&k=6&m=1207979387&s=170667a&w=0&h=YXlGnUgUtQ6LIgQlDETtEEz39T5SR_s3lWGfljHg6Qc='}
            height={'50vh'}
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