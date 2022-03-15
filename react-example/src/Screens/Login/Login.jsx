// External modules
import React from 'react'
import { LoginContext } from '../../Context/index'
import { useNavigate } from 'react-router-dom'
import { FaCircleNotch } from 'react-icons/fa'

// Internal modules
import './Login.less'
import loginService from './login.service'
import Button from '../../Components/Button/Button'

// Components
import LayoutLogin from 'Components/LayoutLogin/LayoutLogin'

export default function Login () {

  // Global state
  const navigate = useNavigate()
  const { save, setSave, item, saveToken } = React.useContext(LoginContext)

  // Local state
  const [email, setEmail]       = React.useState('')
  const [password, setPassword] = React.useState('')
  const [load, setLoad]         = React.useState(false)
  const [check, setCheck]       = React.useState(false)
  const [message, setMessage]   = React.useState('')

  // Save and item effect
  React.useEffect(() => {

    if (save.success) {

      if (check) {
        saveToken(save)
      }

      navigate('/login-success')

    } else if (item.success) {
      navigate('/login-success')
    }

  }, [save, item])

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
      setMessage('The email entered does not contain @')
    } else if (password.length <= 4) {
      setMessage('The password must have a minimum of 4 characters')
    } else if (email.length <= 4) {
      setMessage('Very short email')
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

        {message !== '' && <span>{message}</span>}
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

            Login now

            <div className='spinner'>
              <FaCircleNotch />
            </div>
          </Button>
        </div>
      </form>
    </LayoutLogin>
  )
}
