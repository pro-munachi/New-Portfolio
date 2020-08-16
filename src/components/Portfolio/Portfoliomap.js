import React from 'react'
import PortfolioFile from './Portfoliofile'
import PortfolioData from './Portfoliodata'

function PortfolioMap(props) {
    const Port = PortfolioData.map(file => <PortfolioFile key={file.id} file={file} />)
    return (
        <div>
           {Port}
        </div>
    )
}

export default PortfolioMap