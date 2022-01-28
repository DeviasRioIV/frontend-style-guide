// External modules
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Internal modules
import routes from 'Router/routes'
import { RouterContext } from 'Router/RouterContext'

// Styles
import './Sidebar.less'

export default function Sidebar (props) {

  // Extract props
  const {
    account,
    behavior,
    hierarchyType,
    iconPosition,
    onlyMobile
  } = props

  // Global state
  const { state, dispatch } = React.useContext(RouterContext)
  const { sidebarOpen } = state

  // Local state
  const [active, setActive] = React.useState('')
  const [links, setLinks]   = React.useState([])

  // Constants
  const location = useLocation()

  // Routes effect
  React.useEffect(() => {
    const links = routes.filter(route => route.sidebar)
    setLinks(links)
  }, [])

  // Update active item
  React.useEffect(() => {
    if (location) {
      setActive(location.pathname)
    }
  }, [location])

  // Method
  const closeSidebar = () => {
    dispatch({
      type: 'UPDATE_SIDEBAR_OPEN',
      data: false
    })
  }

  // Render methods
  const RenderRoute = ({ route }) => (
    <li
      className={active.includes(route.path) ? 'active' : ''}
    >
      <Link
        to={route.path}
        onClick={closeSidebar}
        className={iconPosition === 'right' ? 'right-icon' : ''}
      >
        {/* Left icon position */}
        {
          route.icon && iconPosition !== 'right' &&
            route.icon
        }

        {/* Label */}
        {route.label}

        {/* Right icon position */}
        {
          route.icon && iconPosition === 'right' &&
          route.icon
        }
      </Link>
    </li>
  )

  const RenderGroup = ({ group }) => (
    <div className='routes-group'>

      {/* Route name */}
      <h4
        className={iconPosition === 'right' ? 'right-icon' : ''}
      >
        {/* Left icon position */}
        {
          group.icon && iconPosition !== 'right' &&
          group.icon
        }

        {group.name}

        {/* Right icon position */}
        {
          group.icon && iconPosition === 'right' &&
          group.icon
        }
      </h4>

      {/* Routes list */}
      {
        group.routes.map((route, index) => <RenderRoute route={route} key={index} />)
      }
    </div>
  )

  return (
    <>
      <aside
        id='sidebar-container'
        className={sidebarOpen ? '' : 'hide'}
      >

        {/* Sidebar Overlay (mobile) */}
        <div
          id='sidebar-overlay'
          onClick={closeSidebar}
        />

        {/* Routes */}
        <nav>
          {
            links.length && links.map((route, index) => {
              return route.routes
                ? <RenderGroup group={route} key={index} />
                : <RenderRoute route={route} key={index} />
            })
          }
        </nav>
      </aside>
    </>
  )
}
