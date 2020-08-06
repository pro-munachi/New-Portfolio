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
            </div> <hr style={{ marginTop: '70px', background: 'teal' }} />
            <div className='ul'>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <hr style={{ marginRight: '' }} />
                <NavLink to='/about'>About</NavLink>
                <hr style={{ marginRight: '40px' }} />
                <NavLink to='/portfolio'>Portfolio</NavLink>
                <hr style={{ marginRight: '40px' }} />
                <NavLink to='/contact'>Contact</NavLink>
                
            </ul>
            </div><hr style={{ marginTop: '130px', background: 'teal' }} />
        
        </nav>
     </Nav>
    )
}

export default SideDrawer