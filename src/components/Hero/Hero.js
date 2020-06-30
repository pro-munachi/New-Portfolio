import React from 'react';
import {NavLink} from 'react-router-dom'
import {Div} from './styled'


function Hero(props) {
    return(
        <Div image={props.image} height={props.height}>  
            <div>     
                <h1>{props.title}</h1>
                <p>{props.sub}</p>
                <div>
                    <NavLink to='/contact'><button>{props.contact}</button></NavLink>
                    <NavLink to='/portflio'><button>{props.portfolio}</button></NavLink>
                </div>
            </div> 
        </Div>
    )
}

export default Hero;