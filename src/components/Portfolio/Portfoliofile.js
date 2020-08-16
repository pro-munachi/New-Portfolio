import React from 'react'
import {Cards} from './style'

function PortfolioFile(props) {
    return (
        <Cards imgUrl = {props.file.back}>
        <div className='card'>
            <div className='caption_container'>
            </div>
            <div className = 'card_text'>
                <div className='caption'>
                    {props.file.head}
                    <a href={props.file.link}><button>Visit</button></a>
                </div>
            </div>
            
        </div>
    </Cards> 
    )
}

export default PortfolioFile