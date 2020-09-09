import React from 'react'
import {Div} from './style'

function Footer() {
    return (
        <Div>
            <div className='pic'>
                <ul className='sci'>
                <a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.svg' alt=''/></a>
                <a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/insta.svg' alt=''/></a>         
                <a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.svg' alt=''/></a>
                <a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/link.svg' alt=''/> </a> 
                <a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/insta.svg' alt=''/></a>
                </ul>
            </div>
            <div className='word'>
                <p>2020 Munachiso, respective clients and agencies.</p>
            </div>
        </Div>
    )
}

export default Footer