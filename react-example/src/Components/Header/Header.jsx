// External modules
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaBars, FaEllipsisV } from 'react-icons/fa'

// Internal modules
import { RouterContext } from 'Router/RouterContext'

// Components
import Sidebar from 'Components/Sidebar/Sidebar'

// Styles
import './Header.less'

export default function Header (props) {

  // Extract props
  const {
    account,
    cart,
    links,
    logoImg,
    logoPosition,
    logoUrl,
    menuIcon,
    iconLinksMode,
    iconSidebarMode,
    search,
    sidebar,
    sticky
  } = props

  // Global state
  const { state, dispatch } = React.useContext(RouterContext)

  // Local state
  const [showMenu, setShowMenu] = React.useState(false)

  // References
  const headerEl = React.useRef(null)

  // Sticky effect
  React.useEffect(() => {
    stickHeader()
  }, [headerEl])

  // Methods
  const toggleSidebar = () => {
    dispatch({
      type: 'UPDATE_SIDEBAR_OPEN',
      data: !state.sidebarOpen
    })
  }

  const toggleMenu = () => {
    const newVal = !showMenu
    setShowMenu(newVal)
  }

  const stickHeader = () => {
    if (headerEl.current && sticky) {
      const height = headerEl.current.offsetHeight
      document.body.style.paddingTop = height + 'px'
    }
  }

  // Render Methods
  const RenderLogo = () => (
    <div id='logo-container'>

      {/* With URL */}
      {
        logoUrl &&
          <Link to={logoUrl}>
            <img
              src={logoImg}
              onLoad={stickHeader}
            />
          </Link>
      }

      {/* Without Url */}
      {!logoUrl && <img src={logoImg} />}
    </div>
  )

  return (
    <div>

      <header
        id='main-header'
        className={`
          ${iconLinksMode ? 'icon-mode' : null}
          ${sticky ? 'sticky' : ''}
        `}
        ref={headerEl}
      >

        <div id='left-side'>

          {/* Sidebar Button */}
          {
            sidebar &&
              <button
                id='toggle-sidebar-btn'
                className={iconSidebarMode ? 'icon-mode' : ''}
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>
          }

          {/* Logo with default/left position */}
          {logoPosition !== 'right' && <RenderLogo />}
        </div>

        {/* Navigation */}
        <div id='navigation-container'>

          {/* Burger Menu */}
          <button
            id='header-menu-icon'
            onClick={toggleMenu}
          >
            {menuIcon}
            {!menuIcon && <FaEllipsisV />}
          </button>

          {/* Menu */}
          <nav
            id='header-nav'
            className={showMenu ? 'show' : ''}
          >
            {
              links &&
              links.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className={link.active ? 'active' : ''}
                >
                  {link.label}
                </Link>
              ))
            }
          </nav>
        </div>

        {/* Search */}
        {/* {search && <Search />} */}

        {/* Cart */}
        {/* {cart && <Cart />} */}

        {/* Account */}
        {/* {account && <Account />} */}

        {/* Logo with right position */}
        {logoPosition === 'right' && <RenderLogo />}
      </header>

      {/* Sidebar */}
      {
        sidebar && <Sidebar />
      }

      <Outlet />

    </div>
  )
}
