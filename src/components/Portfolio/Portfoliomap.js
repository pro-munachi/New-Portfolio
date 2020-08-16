import React from 'react'
import PortfolioFile from './Portfoliofile'
import PortfolioData from './Portfoliodata'
import { FlexStyle } from './style'

function PortfolioMap(props) {
    const Port = PortfolioData.map(file => <PortfolioFile key={file.id} file={file} />)
    return (
        <FlexStyle>
           {Port}
        </FlexStyle>
    )
}

export default PortfolioMap