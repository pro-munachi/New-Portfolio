import React from 'react'
import {Div} from './styled'

function Backdrop(props) {
    return (
        <Div onClick={props.click} />
    )
}

export default Backdrop