import React from 'react';
import {Div} from './styled'


function Hero(props) {
    return(
        <Div image={props.image} height={props.height}>  
            <div>     
                <h1>{props.title}</h1>
                <p>{props.sub}</p>
            </div> 
        </Div>
    )
}

export default Hero;