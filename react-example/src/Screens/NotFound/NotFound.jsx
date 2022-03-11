import React from 'react'
import { useNavigate } from 'react-router-dom'

import './NotFound.less'
import Button from 'Components/Button/Button'

export default function Notfound () {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/login')
  }
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>Oops! we couldn't find this page</p>
      <div onClick={handleHome} className='container-button'>
        <Button>
          HOME
        </Button>
      </div>
    </div>
  )
}
