import React from 'react'
import {Wrapper} from './styled'
import { NavLink } from 'react-router-dom'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


class Toolbar extends React.Component {
    render() {
    return (
        <Wrapper bgcolor={this.props.bgcolor} color={this.props.color}>
            <header>
                <nav>
                   
                    <div className='flex'>
                    <div className='logo'>
                        <NavLink to='/'><p>Muna</p></NavLink>
                    </div>
                    <div className='na'>
                        <div className='toolbar_navigation_items'>
                        <ul>
                            <NavLink to='/' activeClassName='link' exact>Home</NavLink>
                            <NavLink to='/about' activeClassName='link' exact>About</NavLink>
                            <NavLink to='/portfolio' activeClassName='link' exact>Portfolio</NavLink>
                            <NavLink to='/contact'activeClassName='link' exact>Contact</NavLink>
                        </ul>
                        </div>
                        <div className='tog'>
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    </div>
                    </div>
                </nav>
               
            </header>
        </Wrapper>
    )
    }
}

export default Toolbar