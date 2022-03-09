// External modules
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Internal modules
import './LoginSuccess.less'

// Components
import LayoutLogin from 'Components/LayoutLogin/LayoutLogin'
import useLocalStorage from '../../Hooks/useLocalStorage/useLocalStorage'


export default function LoginSuccess() {

  const navigate = useNavigate()
  const {item, saveItems} = useLocalStorage('TOKEN-V1', [])


  if(!item.success){
    navigate('/login')
  }
  

  const handleLogout = () => {
    saveItems()
    navigate('/login')
  }

  return (
    <LayoutLogin>
      <div className='container'>
        <div className='login-head'>
          <p>
            Success!
          </p>

          <h1>
            You are now logged in
          </h1>
        </div>
        <div className='login-success'>
          <p>Your token is <b>fake-auth-token</b></p>
          <a onClick={handleLogout}>Logout</a>
        </div>
      </div>
    </LayoutLogin>
  )
}
