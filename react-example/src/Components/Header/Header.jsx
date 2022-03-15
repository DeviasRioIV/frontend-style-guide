// External modules
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Internal modules
import './Header.less'
import Carrousel from '../Carousel/Carousel'

export default function Header () {

  const navigate = useNavigate()

  // Methods
  const handleClick = () => {
    navigate('/login')
  }

  return (

    <header>

      <nav>

        <img src='img/Logotype.png' alt='logo of header' />
        <a onClick={handleClick}>Login</a>
      </nav>

      <Carrousel />
    </header>
  )
}
