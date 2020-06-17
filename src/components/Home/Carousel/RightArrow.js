import React from 'react'

function RightArrow(props) {
    return (
        <div onClick={props.goToPrevSlide}>
            <img src='/Asset/Icon/rightarrow.svg' alt='' width='40%'/>
        </div>
    )
}

export default RightArrow