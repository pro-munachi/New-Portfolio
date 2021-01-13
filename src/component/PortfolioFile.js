import React from 'react'
import { Containers } from '../Styles/PortfolioStyle'

const PortfolioFile = props => {
  return (
    <Containers>
      <div className='card'>
        <div>
          <h2>{props.data.name}</h2>
          <p className='tech'>{props.data.tech}</p>
          <p>{props.data.about}</p>
        </div>
        <div className='host'>
          <p>
            <i class='fas fa-eye'></i>{' '}
            <a href={props.data.site} target='_blank' rel='noopener noreferrer'>
              site
            </a>
          </p>
          <p className='p'>
            <i class='fas fa-code-branch'></i>{' '}
            <a href={props.data.code} target='_blank' rel='noopener noreferrer'>
              repo
            </a>
          </p>
        </div>
      </div>
    </Containers>
  )
}

export default PortfolioFile
