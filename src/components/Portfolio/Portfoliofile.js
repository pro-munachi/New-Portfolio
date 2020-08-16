import React from 'react'

function PortfolioFile(props) {
    return (
        <div>
            <h2>{props.file.head}</h2>
            <button><a> {props.file.link} </a></button>
        </div>
    )
}

export default PortfolioFile