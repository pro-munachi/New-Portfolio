import React from 'react'
import {Child} from './styled'

function Childrens(props) {
    return (
        <Child>
            {props.children}
        </Child>
    )
}

export default Childrens