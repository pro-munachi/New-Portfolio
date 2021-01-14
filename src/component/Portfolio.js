import React from 'react'

import { Container } from '../Styles/PortfolioStyle'
import PortfolioFile from './PortfolioFile'
import Datum from './PortfolioData'

const Portfolio = () => {
  return (
    <Container>
      {Datum.map(data => (
        <PortfolioFile key={data.id} data={data} />
      ))}
      <div className='space'>
        <p>Munachi</p>
      </div>
    </Container>
  )
}

export default Portfolio
