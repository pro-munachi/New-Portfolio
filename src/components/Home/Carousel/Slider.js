import React from 'react'
import Slide from './Slide';
import CarouselList from './CarouselList';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import {Div} from './styled'


const styles = {
    transition: 'opacity 1s ease-in-out'
  }

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            length: CarouselList.length
        }
        this.goToNextSlide = this.goToNextSlide.bind(this)
    }

    componentDidMount = () => {

        setInterval(() =>{
            if (this.state.fade === 1) {
              this.setState({fade:0})
            }
        
          setTimeout(()=>{
            this.goToNextSlide()
          },1000)
        },5000)
        
      }

    goToPrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
    if(index < 1) {
          index = length - 1;
        }
        else {
          index--;
        }
    this.setState({
          activeIndex: index
        });
      }
    goToNextSlide() {
          let index = this.state.activeIndex;
          let length = this.state.length;
    if(index === length - 1) {
            index = 0
          }
          else {
            index++;
          }
    this.setState({
            activeIndex: index
          });
      }


    render() {
        return (
            <Div>
                <div className='slider-items'>
                    <div className='left'>
                    <LeftArrow
                    goToPrevSlide={() => this.goToPrevSlide()}
                    />
                    </div>
                    <div className='slider-text'>
                    <div style = {{...styles, opacity: this.state.fade}}>
                        <Slide
                        activeIndex={this.state.activeIndex}
                        />
                    </div>
                </div>
                <RightArrow
                goToNextSlide={() => this.goToNextSlide()}
                />
                </div>
            </Div>
        )
    }
}

export default Slider