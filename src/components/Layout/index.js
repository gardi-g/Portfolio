import './index.scss';
import {Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'
import React from 'react'
const Layout = () => {
    return ( 
        <div className = "App">
            <Sidebar />
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout