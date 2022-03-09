// External modules
import React, { useState} from "react";

// Internal modules
import useLocalStorage from '../Hooks/useLocalStorage/useLocalStorage'

// Components
const LoginContext = React.createContext();

function LoginProvider(props) {
  const [save, setSave]              = useState({})
  const {item, saveItems: saveToken} = useLocalStorage('TOKEN-V1', []);

  return(
    <LoginContext.Provider 
    value={{
      save,
      setSave,
      item,
      saveToken
    }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export { LoginContext, LoginProvider };