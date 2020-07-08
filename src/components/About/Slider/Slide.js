import React from 'react'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import {Container, Arrow} from './styled'


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
      <div>
        <h1>Slide 1</h1>
        <p>Slide Description</p>
      </div>
    </Slide>
    <Slide right>
      <div>
        <h1>Slide 2</h1>
        <p>Slide Description</p>
      </div>
    </Slide>
  </Carousel>
);
}

export default Slider