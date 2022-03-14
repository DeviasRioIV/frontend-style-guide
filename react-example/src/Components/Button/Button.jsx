// External modules
import React from 'react'

// Internal modules
import './Button.less'

export default function Button ({ load, type, children }) {
  return (
    <button className={load} type={type}>
      {children}
    </button>
  )
}
