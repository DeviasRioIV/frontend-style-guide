// External modules
import React from 'react'

// Internal modules
import serverMock from './Helpers/Mock/Mock.js'
import { AppProvider } from './App.Context.jsx'
import { reducer } from './App.Reducer.js'
import Router from './Router/Router'
import './Less/config.less'

// Start mock
serverMock()

export default function App () {

  // Declare reducer
  const [state, dispatch] = React.useReducer(...reducer)

  return (
    <AppProvider value={{ state, dispatch }}>
      <Router />
    </AppProvider>
  )
}
