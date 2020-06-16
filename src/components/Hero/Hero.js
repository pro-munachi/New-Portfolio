import React from 'react';
import {NavLink} from 'react-router-dom'
import {Div} from './styled'


function Hero(props) {
    return(
        <Div image={props.image} height={props.height}>  
            <div>     
                <h1>{props.title}</h1>
                <p>{props.sub}</p>
                <NavLink to='/contact'><button>Contact Me</button></NavLink>
            </div> 
        </Div>
    )
}

export default Hero;