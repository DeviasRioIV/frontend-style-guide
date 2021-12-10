// External modules
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'

// Styles
import './Layout.less'

export default function Layout ({ children }) {

  return (
    <main id='main-layout'>
      <Sidebar />
    </main>
  )
}
