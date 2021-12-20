// External modules
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

// Styles
import './Header.less'

export default function Header (props) {

  // Extract props
  const {
    account,
    background,
    burgerMenu,
    cart,
    links,
    linkColor,
    linkActiveColor,
    logoImg,
    logoPosition,
    logoUrl,
    menuIcon,
    search,
    sticky
  } = props

  // Local state
  const [showMenu, setShowMenu] = React.useState(false)

  // References
  const headerEl = React.useRef(null)

  // Links effect
  React.useEffect(() => {
    if (links) {
      links.map(link => {
        // if (link === 'active') {
        //   link.active = true
        // }
      })
    }
  }, [links])

  // Sticky effect
  React.useEffect(() => {
    stickHeader()
  }, [headerEl])

  // Methods
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
        className={
          burgerMenu ? 'burger-mode' : '',
          sticky ? 'sticky' : ''
        }
        style={{
          backgroundColor: background
        }}
        ref={headerEl}
      >

        {/* Logo with default/left position */}
        {logoPosition !== 'right' && <RenderLogo />}

        {/* Navigation */}
        <div id='navigation-container'>

          {/* Burger Menu */}
          <button
            id='header-menu-icon'
            onClick={toggleMenu}
          >
            {menuIcon}
            {!menuIcon && <FaBars color={linkColor} />}
          </button>

          {/* Menu */}
          <nav
            id='header-nav'
            className={showMenu ? 'show' : ''}
            style={{
              backgroundColor: background
            }}
          >
            {
              links &&
                links.map((link,index) => (
                  <Link
                    key={index}
                    to={link.url}
                    style={{
                      color: link.active ? linkActiveColor : linkColor
                    }}
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

      <Outlet />
    </div>
  )
}
