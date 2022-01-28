// External modules
import React from 'react'
import {
  FaHome,
  FaWpforms
} from 'react-icons/fa'

// Internal modules
import Home from 'Screens/Home/Home'
import Header from 'Screens/Header/Header'
import Sidebar from 'Screens/Sidebar/Sidebar'
import Dropdown from 'Screens/Dropdown/Dropdown'
import Button from 'Screens/Button/Button'
import Modal from 'Screens/Modal/Modal'
import Form from 'Screens/Form/Form'
import TextInput from 'Screens/TextInput/TextInput'
import TextArea from 'Screens/TextArea/TextArea'
import RadioInput from 'Screens/RadioInput/RadioInput'

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
    label: 'Header',
    path: '/header',
    component: <Header />,
    sidebar: true,
    exact: true
  },
  {
    label: 'Sidebar',
    path: '/sidebar',
    component: <Sidebar />,
    sidebar: true,
    exact: true
  },
  {
    label: 'Dropdown',
    path: '/dropdown',
    component: <Dropdown />,
    sidebar: true,
    exact: true
  },
  {
    label: 'Button',
    path: '/button',
    component: <Button />,
    sidebar: true,
    exact: true
  },
  {
    label: 'Modal',
    path: '/modal',
    component: <Modal />,
    sidebar: true,
    exact: true
  },
  {
    name: 'Forms',
    icon: <FaWpforms />,
    routes: [
      {
        label: 'Form',
        path: '/form',
        component: <Form />,
        sidebar: true,
        exact: true
      },
      {
        label: 'TextInput',
        path: '/textinput',
        component: <TextInput />,
        sidebar: true,
        exact: true
      },
      {
        label: 'TextArea',
        path: '/textarea',
        component: <TextArea />,
        sidebar: true,
        exact: true
      },
      {
        label: 'RadioInput',
        path: '/radioinput',
        component: <RadioInput />,
        sidebar: true,
        exact: true
      }
    ],
    sidebar: true
  }
]

export default routes
