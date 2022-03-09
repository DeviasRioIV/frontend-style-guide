// External modules
import React from 'react'

// Internal modules
import './LayoutLogin.less'

export default function LayoutLogin({ children }) {
  return (
    <main>

      <section 
        style={{backgroundImage: 'url("img/bgLogin.jpg")'}} 
        className='layout-img'
      >
        
      </section>

      <section className='layout-login'>

        <div className='div-loguin'>
          
        {children}
        </div>
      </section>
    </main>
  )
}
