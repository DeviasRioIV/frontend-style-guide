// External modules
import React from 'react'
import { FaHome } from 'react-icons/fa'

// Internal modules
import Home from 'Screens/Home/Home'
import Login from 'Screens/Login/Login'
import LoginSuccess from '../Screens/LoginSuccess/LoginSuccess'

const routes = [
  {
    label: 'Home',
    path: '/',
    component: <Home />,
    icon: <FaHome />,
    sidebar: true,
    exact: true,
    index: true
  },
  {
    label: 'Login',
    path: '/login',
    component: <Login />,
    icon: <FaHome />,
    sidebar: true,
    exact: true,
    index: true
  },
  {
    label: 'LoginSucces',
    path: '/login-success',
    component: <LoginSuccess />,
    icon: <FaHome />,
    sidebar: true,
    exact: true,
    index: true
  }
]

export default routes
