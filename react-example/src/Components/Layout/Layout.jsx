// External modules
import React from 'react'
import { Outlet } from 'react-router-dom'

// Styles
import './Layout.less'

export default function Layout ({ children }) {

  return (
    <main id='main-layout'>
      <Outlet />
    </main>
  )
}
