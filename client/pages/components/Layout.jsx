import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <Sidebar/>
        <Header/>
        {children}


    </div>
  )
}

export default Layout