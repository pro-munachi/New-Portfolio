import React from 'react'
import CarouselList from './CarouselList'

class Slide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carousel: CarouselList
        }
    }
    render(){
        return (
            <div>
            {this.state.carousel.map((s, index) =>
                <div className={
                index === this.props.activeIndex ? 'active' : 'inactive'}
                key={index} >
                  <p>{s.title}</p>
                  <h4 style={{textAlign: 'left'}}>- {s.description}</h4>
                </div>
            )}
        </div>
        )
    }
}

export default Slide