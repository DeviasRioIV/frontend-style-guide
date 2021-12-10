// External modules
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// Styles
import './Header.less'

export default function Header () {

  return (
    <div>

      <header id='main-header'>

      </header>

      <Outlet />
    </div>
  )
}
