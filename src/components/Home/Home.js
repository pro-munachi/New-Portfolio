import React from 'react';
import {Div} from './styled'

import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'

function Home() {
    return(
        <Div>
            <Navbar />
            <Hero 
            image={'https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008__340.jpg'}
            height={'70vh'}
            title={'Welcome Home'}
            sub={"ok"}
            />       
            <div>
                
            </div>
        </Div>
    )
}

export default Home;