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
                </div>
                {/*<div className='social'>
                    <a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.png' alt=''/></a>
                    <a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/link.png' alt=''/> </a> 
                    <a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/instagram.png' alt=''/></a>
                    <a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/face.png' alt=''/></a>
                    <a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/github.png' alt=''/></a>
                </div>*/}
            </div> 
        </Div>
    )
}

export default Hero;