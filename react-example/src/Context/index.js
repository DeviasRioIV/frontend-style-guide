// External modules
import React from 'react'

// Internal modules
import useLocalStorage from 'Hooks/LocalStorage.hook'

// Components
const LoginContext = React.createContext()

function LoginProvider (props) {

  // Local state
  const [save, setSave] = React.useState({})

  // Hooks
  const { item, saveItems: saveToken } = useLocalStorage('TOKEN-V1', [])

  return (
    <LoginContext.Provider
      value={{
        save,
        setSave,
        item,
        saveToken
      }}
    >
      {props.children}
    </LoginContext.Provider>
  )
}

export { LoginContext, LoginProvider }
