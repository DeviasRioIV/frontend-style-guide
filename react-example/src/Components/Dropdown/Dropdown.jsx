// External modules
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'

// Internal modules
import './Dropdown.less'

// Components
import Chips from 'Components/Chips/Chips'

export default function Dropdown (props) {

  // Extract props
  const {
    handler,
    multiValue,
    options,
    placeholder,
    searchable,
    value
  } = props

  // Local state
  const [selection, setSelection] = React.useState([])
  const [searchVal, setSearchVal] = React.useState('')
  const [isOpen, setIsOpen]       = React.useState(false)

  // Render effect
  React.useEffect(() => {

    // Check placeholder
    if (placeholder) {

      if (value) {
        pick(value)
      } else {
        pick(-1)
      }

    } else if (value) {
      pick(value)
    } else {
      // Value is requiered
    }

  }, [])

  // Window click
  React.useEffect(() => {

    if (isOpen && !multiValue) {
      window.addEventListener('click', handleOpen)
    }

    function handleOpen () {
      setIsOpen(false)
      window.removeEventListener('click', handleOpen)
    }
  }, [isOpen])

  // Methods
  const pick = value => {

    // Disallow placeholder selection for multivalue
    if (value === -1 && multiValue) return

    // Declare new value
    let newVal

    // Placeholder case
    if (value === -1) {
      newVal = [{
        label: placeholder,
        value: -1
      }]
    } else if (value !== -1) {

      const match = options.filter(o => o.value === value)

      if (multiValue) {
        newVal = [...selection, ...match]
      } else {
        newVal = match
      }
    }

    // Update value
    setSelection(newVal)

    // Call handler
    handler(newVal)

    // Close dropdown if multiValue is not enabled
    if (!multiValue) {
      setIsOpen(false)
    }
  }

  const unPick = value => {
    const index = selection.map(o => o.value).indexOf(value)
    selection.splice(index, 1)
  }

  const filterMultival = option => {
    return !multiValue || !selection.map(x => x.value).includes(option.value)
  }

  const filterSearch = option => {
    return !searchable || searchVal.includes(option.label)
  }

  return (
    <div className='dropdown'>

      {/* Button */}
      <button
        className={`
          dropdown-toggle
          ${selection.length > 0 && selection[0].value !== -1 ? 'selected' : ''}
          ${isOpen ? 'open' : ''}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Single value */}
        {
          !multiValue && selection.map(o => o.label)
        }

        {/* Multiple values with selection */}
        {
          multiValue && selection.map((o, index) => (
            <Chips
              key={index}
              label={o.label}
              value={o.value}
              onClose={unPick}
            />
          ))
        }
        <FaCaretDown />
      </button>

      {/* Options list */}
      <ol
        className={`dropdown-list ${isOpen ? 'open' : ''}`}
      >

        {/* Placeholder option */}
        {
          placeholder &&
            <li
              className={selection.value === -1 ? 'active' : ''}
              onClick={() => pick(-1)}
            >
              {placeholder}
            </li>
        }

        {/* Options list */}
        {
          options
            .filter(filterMultival)
            .filter(filterSearch)
            .map((option, index) => (
              <li
                key={index}
                onClick={() => pick(option.value)}
                className={selection.value === option.value ? 'active' : ''}
              >
                {option.label}
              </li>
            ))
        }
      </ol>
    </div>
  )
}
