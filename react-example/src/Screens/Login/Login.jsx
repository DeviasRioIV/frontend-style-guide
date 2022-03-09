// External modules
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Internal modules
import './Login.less'
import loginService from './login.service'
import useLocalStorage from '../../Hooks/useLocalStorage/useLocalStorage'

// Components
import LayoutLogin from 'Components/LayoutLogin/LayoutLogin'


export default function Login() {

  // global state
  const {item, saveItems: saveToken} = useLocalStorage('TOKEN-V1', [])
  const navigate = useNavigate()

  // Local state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [camposCompletos, setCamposCompletos] = useState(false)


  useEffect(() => {
    if (item.success) {
      navigate('/login-success')
    }
  }, [item])


  // Methods
  const onSubmit = async (event) => {
    event.preventDefault()
    if(email.includes('@') && password.length >= 4 && email.length >= 4){

      const response = await loginService({
        email: email,
        password: password
      })
  
      saveToken(response)
    }
    setCamposCompletos(true)
  }

  const onPassword = (event) => {
    setPassword(event.target.value)
  }

  const onEmail = (event) => {
    setEmail(event.target.value)
  }

  return (
    <LayoutLogin>
      <div className='login-head'>

        <p>
          Welcome back
        </p>

        <h1>
          Login to your account
        </h1>
      </div>

      <form>

        <label htmlFor="">
          Email
        </label>

        <input type="email" placeholder='John.snow@gmail.com' value={email} onChange={onEmail}/>

        <label htmlFor="">
          Password
        </label>

        <input type="password" placeholder='*********' value={password} onChange={onPassword}/>

        {camposCompletos && <span>Complete adecuadamente los campos</span>}
        
        <div className='input-remember'>
          <input type="checkbox"/>
          <p>Remember me</p>
        </div>

        <button type='submit' className='load' onClick={onSubmit}>Login now</button>
      </form>
    </LayoutLogin>
  )
}
