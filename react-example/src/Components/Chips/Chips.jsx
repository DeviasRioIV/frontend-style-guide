// External modules
import React from 'react'

export default function Chips (props) {

  // Extract props
  const {
    label,
    onClose,
    value
  } = props

  return (
    <div className='chip-container'>
      {label}
      {
        onClose &&
          <button
            onClick={() => onClose(value)}
          >
            x
          </button>
      }
    </div>
  )
}
