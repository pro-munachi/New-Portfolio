import React from 'react'
import { Containers } from '../Styles/PortfolioStyle'
import { Bounce } from 'react-reveal'

const PortfolioFile = props => {
  return (
    <Containers>
      <Bounce>
        <div className='card'>
          <div>
            <h2>{props.data.name}</h2>
            <p className='tech'>{props.data.tech}</p>
            <p>{props.data.about}</p>
          </div>
          <div className='host'>
            <p>
              {' '}
              <a
                href={props.data.site}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fas fa-eye' style={{ margin: '0 6px' }}></i>
                site
              </a>
            </p>
            <p className='p'>
              {' '}
              <a
                href={props.data.code}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fas fa-code-branch' style={{ margin: '0 6px' }}></i>
                repo
              </a>
            </p>
          </div>
        </div>
      </Bounce>
    </Containers>
  )
}

export default PortfolioFile
