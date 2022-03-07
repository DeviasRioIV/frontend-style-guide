// External modules
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Routes
import routes from './routes'

export default function Router () {

  return (
    <BrowserRouter>

      <Routes>
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
      </Routes>
    </BrowserRouter>
  )
}
