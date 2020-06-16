import React from 'react'
import { Drawertoggle } from './styled'

function DrawerToggleButton(props) {
    return (
       <Drawertoggle onClick={props.click}>
           <div className='toggle-button_line'/>
           <div className='toggle-button_line'/>
           <div className='toggle-button_line'/>
       </Drawertoggle>
    )
}

export default DrawerToggleButton