import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'

import './template/custom.css'


import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

export default (props) => {
    return (
        <div className="container">
            <Menu/>
            <Routes/>
        </div>
    )
}