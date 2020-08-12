import React from 'react';
import {Div} from './styled'

import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'

function Home() {
    return(
        <Div>
            <Navbar color={'#f3dbcf'}/>
            <Hero 
            image={'https://media.istockphoto.com/photos/black-bricks-3d-rendering-picture-id1207979387?b=1&k=6&m=1207979387&s=170667a&w=0&h=YXlGnUgUtQ6LIgQlDETtEEz39T5SR_s3lWGfljHg6Qc='}
            height={'100vh'}
            title={'Hi, I am Madu Stanley Munachiso'}
            sub={"A Front-End Developer"}
            contact={'Contact Me'}
            portfolio={'Portfolio'}
            />       
        </Div>
    )
}

export default Home;