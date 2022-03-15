// External modules
import React, { useEffect, useRef, useState } from 'react'

// Internal modules
import './Carousel.less'

export default function Carrousel () {

  // Local state
  const sliderShow = useRef(null)
  // const intervalSlider = useRef(null)
  const [pointSlider, setPointSlider] = useState(0)

  // Efects
  useEffect(() => {

    setTimeout(() => {
      next()
    }, 5000)

    // intervalSlider.current = setInterval(() => {
    //   next()
    // }, 4000)

    // sliderShow.current.addEventListener('mouseenter', () => {
    //   clearInterval(intervalSlider.current)
    // })

    // sliderShow.current.addEventListener('mouseleave', () => {
    //   intervalSlider.current = setInterval(() => {
    //     next()
    //   }, 4000)
    // })
  }, [pointSlider])

  // Methods
  const next = () => {
    if (sliderShow.current.children.length > 0) {

      console.log('next')

      const firstElement = sliderShow.current.children[0]
      const widthSlide = sliderShow.current.children[0].offsetWidth

      sliderShow.current.style.transition = '500ms ease-out all'
      sliderShow.current.style.transform = `translateX(-${widthSlide}px)`

      if (pointSlider === 3) {
        setPointSlider(0)
      } else {
        setPointSlider(pointSlider + 1)
      }

      const transition = () => {

        sliderShow.current.style.transition = 'none'
        sliderShow.current.style.transform = 'translateX(0)'
        sliderShow.current.appendChild(firstElement)
        sliderShow.current.removeEventListener('transitionend', transition)
      }

      sliderShow.current.addEventListener('transitionend', transition)
    }
  }

  const previous = () => {
    console.log('Previous')
    if (sliderShow.current.children.length > 0) {

      const index = sliderShow.current.children.length - 1
      const ultimoElemento = sliderShow.current.children[index]
      sliderShow.current.insertBefore(ultimoElemento, sliderShow.current.firstChild)

      sliderShow.current.style.transition = 'none'
      const tamañoSlide = sliderShow.current.children[0].offsetWidth
      sliderShow.current.style.transform = `translateX(-${tamañoSlide}px)`

      if (pointSlider === 0) {
        setPointSlider(3)
      } else {
        setPointSlider(pointSlider - 1)
      }

      setTimeout(() => {
        sliderShow.current.style.transition = '500ms ease-out all'
        sliderShow.current.style.transform = 'translateX(0)'
      }, 30)
    }
  }

  return (
    <div className='carousel'>

      <div className='container-sliders' ref={sliderShow}>

        <div className='slider'>

          <div className='texto-slide'>

            <h1 className='home-title'>INDORS</h1>
            <h2 className='home-subtitle'>See Bamboo’s New Range Of Indoor Furniture</h2>

            <p className='home-description'>

              Classic meet modern living,<br />
              Bamboo has a fantastic range of indoor furniture,<br />
              perfect for any modern home.
            </p>

            <button className='see-more-button'>SEE MORE</button>
          </div>

          <img className='img-carousel' src='img/HeroSection.jpg' alt='image carousel' />
        </div>

        <div className='slider'>

          <div className='texto-slide'>

            <h1 className='home-title'>INDORS</h1>
            <h2 className='home-subtitle'>See Bamboo’s New Range Of Indoor Furniture</h2>

            <p className='home-description'>

              Classic meet modern living,<br />
              Bamboo has a fantastic range of indoor furniture,<br />
              perfect for any modern home.
            </p>

            <button className='see-more-button'>SEE MORE</button>
          </div>

          <img className='img-carousel' src='img/HeroSection.jpg' alt='image carousel' />
        </div>

        <div className='slider'>

          <div className='texto-slide'>

            <h1 className='home-title'>INDORS</h1>
            <h2 className='home-subtitle'>See Bamboo’s New Range Of Indoor Furniture</h2>

            <p className='home-description'>

              Classic meet modern living,<br />
              Bamboo has a fantastic range of indoor furniture,<br />
              perfect for any modern home.
            </p>

            <button className='see-more-button'>SEE MORE</button>
          </div>

          <img className='img-carousel' src='img/HeroSection.jpg' alt='image carousel' />
        </div>

        <div className='slider'>

          <div className='texto-slide'>

            <h1 className='home-title'>INDORS</h1>
            <h2 className='home-subtitle'>See Bamboo’s New Range Of Indoor Furniture</h2>

            <p className='home-description'>

              Classic meet modern living,<br />
              Bamboo has a fantastic range of indoor furniture,<br />
              perfect for any modern home.
            </p>

            <button className='see-more-button'>SEE MORE</button>
          </div>

          <img className='img-carousel' src='img/HeroSection.jpg' alt='image carousel' />
        </div>
      </div>

      <div className='controles'>

        <div className='container-ellipse'>

          <span><img src={(pointSlider === 0) ? 'img/EllipseActive.png' : 'img/Ellipse.png'} alt='point' /></span>
          <span><img src={(pointSlider === 1) ? 'img/EllipseActive.png' : 'img/Ellipse.png'} alt='point' /></span>
          <span><img src={(pointSlider === 2) ? 'img/EllipseActive.png' : 'img/Ellipse.png'} alt='point' /></span>
          <span><img src={(pointSlider === 3) ? 'img/EllipseActive.png' : 'img/Ellipse.png'} alt='point' /></span>

        </div>

        <a onClick={previous} className='arrow-left'><img src='img/arrow.png' alt='point' /></a>
        <a onClick={next} className='arrow-right'><img src='img/arrow.png' alt='point' /></a>

      </div>
    </div>
  )
}
