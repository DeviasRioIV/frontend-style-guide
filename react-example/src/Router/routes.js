// External modules
import React from 'react'
import { FaHome } from 'react-icons/fa'

// Internal modules
import Home from 'Screens/Home/Home'

const routes = [
  {
    label: 'Home',
    path: '/',
    component: <Home />,
    icon: <FaHome />,
    sidebar: true,
    exact: true,
    index: true
  }
]

export default routes
