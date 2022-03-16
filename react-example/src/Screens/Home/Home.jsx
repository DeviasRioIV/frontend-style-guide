// External modules
import React from 'react'

// Internal modules
import './Home.less'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'

export default function Home () {

  return (
    <div>

      <Header />

      <main className='home-main'>

        <h2>Bamboo Products</h2>

        <section className='container-img-home'>

          <img src='img/Rectangle1.jpg' alt='imagen 1/3' />
          <img src='img/Rectangle2.jpg' alt='imagen 2/3' />
          <img src='img/Rectangle3.jpg' alt='imagen 3/3' />
          <img src='img/Rectangle1.jpg' alt='imagen 1/3' />
          <img src='img/Rectangle2.jpg' alt='imagen 2/3' />
          <img src='img/Rectangle3.jpg' alt='imagen 3/3' />
          <img src='img/Rectangle1.jpg' alt='imagen 1/3' />
          <img src='img/Rectangle2.jpg' alt='imagen 2/3' />
          <img src='img/Rectangle3.jpg' alt='imagen 3/3' />
          <img src='img/Rectangle1.jpg' alt='imagen 1/3' />
          <img src='img/Rectangle2.jpg' alt='imagen 2/3' />
          <img src='img/Rectangle3.jpg' alt='imagen 3/3' />

        </section>

        <div className='scroll-img'>
          <span className='scroll-bar'> </span>
        </div>
      </main>

      <Footer />
    </div>
  )
}
