// External modules
import React from 'react'

// Internal modules
import './Header.less'

export default function Button ({ load, type, children }) {
  return (

    <header>

      <nav>

        <img src='img/Logotype.png' alt='logo of header' />
        <a>Login</a>
      </nav>

      <section style={{ backgroundImage: 'url("img/HeroSection.jpg")' }}>

        <h1 className='home-title'>INDORS</h1>
        <h2 className='home-subtitle'>See Bamboo’s New Range Of Indoor Furniture</h2>
        <p className='home-description'>
          Classic meet modern living,<br />
          Bamboo has a fantastic range of indoor furniture,<br />
          perfect for any modern home.
        </p>

        <button className='see-more-button'>SEE MORE</button>

        <div className='container-ellipse'>
          <span><img src='img/EllipseActive.png' alt='point activ' /></span>
          <span><img src='img/Ellipse.png' alt='point' /></span>
          <span><img src='img/Ellipse.png' alt='point' /></span>
          <span><img src='img/Ellipse.png' alt='point' /></span>
        </div>
        <span className='arrow-left'><img src='img/arrow.png' alt='point' /></span>
        <span className='arrow-right'><img src='img/arrow.png' alt='point' /></span>
      </section>
    </header>
  )
}
