// External modules
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Internal modules
import { RouterProvider } from './RouterContext'
import { reducer } from './Router.reducer'

// Components
import Header from 'Components/Header/Header'
import Layout from 'Components/Layout/Layout'

// Routes
import routes from './routes'

export default function Router () {

  // Declare global state
  const [state, dispatch] = React.useReducer(...reducer)

  return (
    <RouterProvider value={{ state, dispatch }}>

      <BrowserRouter>

        <Routes>

          {/* Routes */}
          <Route
            element={
              <Header
                links={[
                  {
                    url: '/',
                    label: 'Docs'
                  },
                  {
                    url: '/sample',
                    label: 'Sample'
                  }
                ]}
                logoImg='/img/logo.png'
                logoPosition='left'
                logoUrl='/'
                sidebar
                iconLinksMode
                iconSidebarMode
                sticky
              />
            }
          >

            <Route element={<Layout />}>

              {/* Routes */}
              {
                routes.map((route, index) => (
                  <Route
                    key={index}
                    index={route.index}
                    path={route.path}
                    element={route.component}
                  />
                ))
              }
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </RouterProvider>
  )
}
