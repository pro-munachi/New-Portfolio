import React from 'react'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import {Container, Arrow} from './styled'

import Childrens from './Children'


const CarouselUI = ({ position, handleClick, children }) => (
    <Container>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Container>
  );
const Carousel = makeCarousel(CarouselUI);

function Slider() {
return (
  <Carousel defaultWait={8000} /*wait for 5000 milliseconds*/ >
    <Slide right>
      <Childrens>
          <div>
              <img src='/Asset/img/img.jpg' alt=''/>
              <div className='word'>
                <h1>About Madu Stanley</h1>
                <p>Madu Stanley Munachiso is a Front-End Developer who is from Imo State in Nigeria, He graduated with a Bsc from the prestigious
                    Federal University Of Technology Owerri, Nigeria. he was introduced to web development by his elder brother who is also a programmer.
              </p>
              </div>
          </div>
      </Childrens>
    </Slide>
    <Slide right>
      <Childrens>
          <div>
              <img src='/Asset/img/img1.jpg' alt=''/>
              <h1>
                  munachiso
              </h1>
          </div>
      </Childrens>
    </Slide>
    <Slide right>
      <Childrens>
          <div>
              <img src='/Asset/img/img2.jpg' alt=''/>
              <h1>
                  munachiso
              </h1>
          </div>
      </Childrens>
    </Slide>
  </Carousel>
);
}

export default Slider