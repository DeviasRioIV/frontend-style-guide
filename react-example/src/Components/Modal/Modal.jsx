// External modules
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { FaTimes } from 'react-icons/fa'

// Internal modules
import './Modal.less'

export default function Modal (props) {

  // Extract props
  const {
    backdrop,
    btnClose,
    children,
    open,
    setOpen
  } = props

  // Open effect
  React.useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [open])

  // Methods
  const backdropClose = () => {
    if (backdrop) {
      setOpen(false)
    }
  }

  return (
    <CSSTransition
      timeout={0}
      classNames='modal'
      unmountOnExit
      in={open}
    >
      <div
        className={`modal-component ${open ? 'show' : ''}`}
      >

        {/* Backdrop */}
        <div className='backdrop' onClick={backdropClose} />

        <div className='modal-content'>

          {/* Close btn */}
          {
            btnClose &&
              <button className='close-btn' onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
          }

          {/* Content */}
          {children}
        </div>
      </div>
    </CSSTransition>
  )
}
