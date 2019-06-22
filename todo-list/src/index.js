import React from 'react'
import ReactDOM from 'react-dom'
import PortfolioState from './context/PortfolioState'
import App from './App'

ReactDOM.render(
    <PortfolioState>
        <App />
    </PortfolioState>
, document.getElementById('root'))
