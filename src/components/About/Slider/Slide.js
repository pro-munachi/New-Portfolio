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
  <Carousel defaultWait={5000} /*wait for 5000 milliseconds*/ >
    <Slide right>
      <Childrens>
          <div>
              <img src='/Asset/img/img.jpg' alt=''/>
              <h1>munachiso</h1>
          </div>
      </Childrens>
    </Slide>
    <Slide right>
      <Childrens>
          <div>
              <h1>
                  munachiso
              </h1>
          </div>
      </Childrens>
    </Slide>
    <Slide right>
      <Childrens>
          <div>
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