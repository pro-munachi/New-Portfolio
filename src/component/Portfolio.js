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
    </Container>
  )
}

export default Portfolio
