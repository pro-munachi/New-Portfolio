import React from 'react'

import Navbar from '../Navbar/Navbar'
import {Div} from './styled'
import Form from './Form'

function Contact() {
    return(
        <Div>
            <Navbar 
            bgcolor={'#0f3959'}
            color={'white'}/><br /><br /><br /><br /><br /><br />
            <Form />
        </Div>
    )
}

export default Contact