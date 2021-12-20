// External modules
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from 'Components/Header/Header'
import Layout from 'Components/Layout/Layout'

// Routes
import routes from './routes'

export default function Router () {

  return (

    <BrowserRouter>

      <Routes>

        {/* Routes */}
        <Route
          element={
            <Header
              background='#186B7F'
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
              linkActiveColor='#FAFAFA'
              linkColor='#FFF'
              logoImg='/img/logo.png'
              logoPosition='left'
              logoUrl='/'
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
  )
}
