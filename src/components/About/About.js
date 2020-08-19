import React from 'react'
import {NavLink} from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Slider from './Slider/Slide'
import Footer from '../Footer/Footer'
import {Div} from './styled'



function About() {
    return(
        <Div>
            <Navbar 
            bgcolor={'#0f3959'}
            color={'white'}
            /><br /><br />
            {/*<Hero 
            image={'https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg'}
            height={'70vh'}
            title={'About Madu Stanley Munachiso'}
            contact={'Contact Me'}
            portfolio={'Portfolio'}
            />  */}
            <div className='slid'>
                <Slider />
                <div className='but'>
                    <h1>Want To Talk To Me About Creating A Website?</h1>
                    <button><NavLink to='contact'>Get In Touch</NavLink></button>
                </div>
            </div>
            <Footer />
        </Div>
    )
}

export default About