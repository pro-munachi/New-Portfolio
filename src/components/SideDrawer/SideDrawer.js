import React from 'react'
import {Nav} from './styled'
import { NavLink } from 'react-router-dom'

function SideDrawer(props) {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <Nav>
        
        <nav className={drawerClasses}>
            <div className='image'>
                <img src='/Asset/img/img.jpg' alt=''/>
            </div> <hr style={{ marginTop: '50px' }} />
            <div className='ul'>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/portfolio'>Portfolio</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                
            </ul>
            </div><hr style={{ marginTop: '50px' }} />
                {/*<div className='social'>
                    <a href='https://twitter.com/Munachiiso?s=09' target='_blank' rel='noopener noreferrer'> <img src='/Asset/Icon/twitter.png' alt=''/></a>
                    <a href='https://linkedin.com/in/munachiso' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/link.png' alt=''/> </a> 
                    <a href='https://www.instagram.com/munachiiso/' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/instagram.png' alt=''/></a>
                    <a href='https://m.facebook.com/madu.stanley.71' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/face.png' alt=''/></a>
                    <a href='https://github.com/pro-munachi' target='_blank'  rel='noopener noreferrer'> <img src='/Asset/Icon/github.png' alt=''/></a>
                </div>*/}
        
        </nav>
     </Nav>
    )
}

export default SideDrawer