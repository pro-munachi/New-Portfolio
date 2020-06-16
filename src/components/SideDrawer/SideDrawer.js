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
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/portfolio'>Portfolio</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </ul>
        </nav>
     </Nav>
    )
}

export default SideDrawer