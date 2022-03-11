// External modules
import React, { useEffect, useState, useContext } from 'react'
import { LoginContext } from '../../Context/index'
import { useNavigate } from 'react-router-dom'

// Internal modules
import './Login.less'
import loginService from './login.service'
import Button from '../../Components/Button/Button'

// Components
import LayoutLogin from 'Components/LayoutLogin/LayoutLogin'

export default function Login () {
  // global state
  const navigate = useNavigate()
  const { save, setSave, item, saveToken } = useContext(LoginContext)

  // Local state
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [load, setLoad]         = useState(false)
  const [check, setCheck]       = useState(false)
  const [mensaje, setMensaje]   = useState('')

  // Efects
  useEffect(() => {
    if (save.success) {
      if (check) {
        saveToken(save)
      }
      navigate('/login-success')
    } else if (item.success) {
      navigate('/login-success')
    }
  }, [save])

  // Methods
  const onSubmit = async (event) => {
    event.preventDefault()
    setLoad(true)
    if (email.includes('@') && password.length >= 4 && email.length >= 4) {
      const response = await loginService({
        email: email,
        password: password
      })

      setSave(response)
    }

    setLoad(false)

    if (!email.includes('@')) {
      setMensaje('The email entered does not contain @')
    } else if (password.length <= 4) {
      setMensaje('The password must have a minimum of 4 characters')
    } else if (email.length <= 4) {
      setMensaje('Very short email')
    }
  }

  const onPassword = (event) => {
    setPassword(event.target.value)
  }

  const onEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleCheck = () => {
    setCheck(!check)
  }

  return (
    <LayoutLogin>
      <div className='login-head'>

        <p>
          Welcome back {}
        </p>

        <h1>
          Login to your account
        </h1>
      </div>

      <form>

        <label>
          Email
        </label>

        <input
          type='email'
          placeholder='John.snow@gmail.com'
          value={email}
          onChange={onEmail}
        />

        <label>
          Password
        </label>

        <input
          type='password'
          placeholder='*********'
          value={password}
          onChange={onPassword}
        />

        {mensaje !== '' && <span>{mensaje}</span>}
        <div className='input-remember'>

          <input
            type='checkbox'
            onClick={handleCheck}
          />

          <p>
            Remember me
          </p>
        </div>

        <div onClick={onSubmit}>

          <Button
            load={load ? 'btn-load' : ''}
            type='submit'
          >
            {
            load
              ? <img
                  className='load'
                  src='https://img.icons8.com/fluency/48/000000/loading-sign.png'
                />
              : 'Login now'
            }
          </Button>
        </div>
      </form>
    </LayoutLogin>
  )
}
