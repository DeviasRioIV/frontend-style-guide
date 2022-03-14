import React from 'react'

// Internal modules
import './Footer.less'

export default function Home () {

  return (
    <footer>

      <section className='footer-up'>

        <div className='footer-up-text'>

          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <a>Enter Your E-mail Address Here <img src='img/ArrowFooter.png' alt='icon' /></a>

        </div>

        <div className='footer-up-contact'>

          <h3>JOIN US ON</h3>

          <a href='/'>
            <img src='img/Facebook.png' alt='Facebook' />
          </a>

          <a href='/'>
            <img src='img/Twitter.png' alt='Twitter' />
          </a>
          <a href='/'>
            <img src='img/Instagram.png' alt='Instagram' />
          </a>

        </div>
      </section>

      <section className='footer-down'>

        <p>TERMS & CODITION POLICY</p>
        <img src='img/logoFooter.png' alt='Logo' />
        <p className='register'>© 2019 Bamboo All Rights Reserved</p>

      </section>
    </footer>
  )
}
