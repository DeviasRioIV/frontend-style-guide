// External modules
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'

export default function Dropdown (props) {

  // Extract props
  const {
    placeholder,
    initialVal,
    defaulter,
    options,
    labelKey,
    valueKey,
    value,
    handler
  } = props

  // Local state
  const [selection, setSelection] = React.useState('')
  const [isOpen, setIsOpen]       = React.useState(false)
  const [defaultVal, setDefaultVal] = React.useState({})

  // Render effect
  React.useEffect(() => {

    defaultVal[labelKey] = placeholder
    setDefaultVal(defaultVal)
    setSelection(defaultVal)

  }, [])

  // Render effect initialVal
  React.useEffect(() => {

    if (initialVal !== null && initialVal !== undefined && selection !== initialVal) {
      pick(initialVal)
    }

  }, [initialVal])

  // Window click
  React.useEffect(() => {

    if (isOpen) {
      window.addEventListener('click', handleOpen)
    }

    function handleOpen () {
      setIsOpen(false)
      window.removeEventListener('click', handleOpen)
    }
  }, [isOpen])

  // Value effect
  React.useEffect(() => {

    if (value !== selection[valueKey]) {

      const index = options.map(x => x[valueKey]).indexOf(parseInt(value))

      if (index > -1) {
        const newSelection = options[index]
        setSelection(newSelection)
      }
    }
  }, [value])

  // Methods
  const pick = newVal => {

    // Placeholder case
    if (newVal === -1) {
      newVal = {}
      newVal[labelKey] = placeholder
      newVal[valueKey] = -1
    }

    setSelection(newVal)

    handler(newVal[valueKey])

    setIsOpen(false)
  }

  return (
    <div className='dropdown'>

      <button
        className={`
          dropdown-toggle
          ${selection[labelKey] !== placeholder ? 'selected' : ''}
          ${isOpen ? 'open' : ''}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selection[labelKey]} <FaCaretDown />
      </button>

      <ol
        className={`dropdown-list ${isOpen ? 'open' : ''}`}
      >

        {
          defaulter &&
            <li
              className={selection === -1 ? 'active' : ''}
              onClick={() => pick(-1)}
            >
              {defaulter}
            </li>
        }

        {
          !defaulter &&
            <li
              className={selection === -1 ? 'active' : ''}
              onClick={() => pick(-1)}
            >
              {placeholder}
            </li>
        }

        {
          options.map((option, index) => (
            <li
              key={index}
              onClick={() => pick(option)}
              className={selection[valueKey] === option[valueKey] ? 'active' : ''}
            >
              {option[labelKey]}
            </li>
          ))
        }
      </ol>
    </div>
  )
}
