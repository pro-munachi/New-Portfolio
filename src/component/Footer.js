import React from 'react'
import { Container } from '../Styles/FooterStyle'

const Footer = () => {
  return (
    <Container>
      <div className='inspire'>
        Inspired by
        <a href='https://kadet.dev/' target='_blank' rel='noopener noreferrer'>
          kadet
        </a>
      </div>
      <div className='copy'>Copyright &copy; Munachi</div>
    </Container>
  )
}

export default Footer
