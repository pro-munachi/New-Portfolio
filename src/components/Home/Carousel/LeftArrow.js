import React from 'react'

function LeftArrow(props) {
    return (
        <div onClick={props.goToPrevSlide}>
            <img src='/Asset/Icon/leftarrow.svg' alt='' width='40%'/>
        </div>
    )
}

export default LeftArrow