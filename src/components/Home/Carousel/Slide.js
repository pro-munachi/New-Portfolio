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
            <section>
                {
                    this.state.carousel.map((s, index) => 
                    <div className={
                        index === this.props.activeindex ? 'active' : 'slide'
                    } key={index}>
                        <h1>{s.title}</h1>
                        <p>{s.description}</p>
                    </div>
                    )
                }
            </section>
        )
    }
}

export default Slide