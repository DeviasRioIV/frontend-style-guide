// External modules
import React from 'react'

// Internal modules
import './Home.less'
import loginService from './login.service'

export default function Home () {

  // Mount effect
  React.useEffect(() => {
    login()
  }, [])

  // Methods
  const login = async () => {
    const response = await loginService({})
    console.log('response was: ', response)
  }

  return (
    <div id='home-container'>
      <h1>
        This is the home page
      </h1>
    </div>
  )
}
