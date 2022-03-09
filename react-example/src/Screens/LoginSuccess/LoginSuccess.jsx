// External modules
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Internal modules
import './LoginSuccess.less'
import { LoginContext } from '../../Context/index' 

// Components
import LayoutLogin from 'Components/LayoutLogin/LayoutLogin'


export default function LoginSuccess() {
  // Global state
  const navigate                         = useNavigate()
  const {save, setSave, item, saveToken} = useContext(LoginContext)
  
  // Effects
  useEffect(() => {
    if(!save.success && !item.success){

      navigate('/login')
    }
  }, [item, save])

  // Methods
  const handleLogout = () => {

    if (item.success) {

      saveToken([])
    }
    setSave({})
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

          <p>
            Your token is <b>fake-auth-token</b>
          </p>

          <a onClick={handleLogout}>
            Logout
          </a>
        </div>
      </div>
    </LayoutLogin>
  )
}
