// External modules
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// Internal modules
import routes  from '../../Router/routes'

// Styles
import './Sidebar.less'

export default function Sidebar () {

  // Local state
  const [loading, setLoading] = React.useState(false)
  const [active, setActive]   = React.useState('')
  const [open, setOpen]       = React.useState(true)

  // Constants
  const location = useLocation()

  const links = routes.filter(route => route.sidebar)

  // Update active item
  React.useEffect(() => {
    setActive(location.pathname)
  }, [location])

  return (
    <>
      <aside
        id='sidebar-container'
        className={`
          ${loading ? 'hide' : ''}
          ${open ? '' : 'hide'}
        `}
      >

        {/* Sidebar Overlay (mobile) */}
        <div id='sidebar-overlay' onClick={() => setOpen(!open)} />

        {/* Links */}
        <nav>

          {
            links.map((link, index) => (
              <li
                key={index}
                className={active.includes(link.path) ? 'active' : ''}
              >
                <Link
                  to={link.path}
                  onClick={() => setOpen(!open)}
                >
                  {link.label}
                </Link>
              </li>
            ))
          }
        </nav>
      </aside>

      <Outlet />

    </>
  )
}
