// External modules
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Internal modules
import serverMock from './Helpers/Mock/Mock.js';
import { AppProvider } from './Helpers/Context.jsx';
import { reducer } from './Helpers/Reducer.js';
import Bootstrap from './Helpers/Bootstrap/Bootstrap.jsx';

export default function App() {

  // Declare reducer
  const [state, dispatch] = React.useReducer(...reducer);

  // Bootstrap effect
  React.useEffect(() => {

    // Start mock
    serverMock();

    // Kick bootstrap
    (async () => {
      const response = await Bootstrap();
      dispatch(response);
    })();
  },[]);
  
  return (

    <AppProvider value={{ state, dispatch }}>
      <div>
        <h1>
          React is working
        </h1>
      </div>
    </AppProvider>
  );
}