import React from 'react'

export default function TextArea ({ type, label, name, maxLength, disabled, optional, handler, submit, validator }) {

  // Local state
  const [value, setValue] = React.useState('')
  const [focus, setFocus] = React.useState(false)
  const [error, seterror] = React.useState(false)

  // Element reference
  const textarea = React.useRef(null)

  // Methods
  const change = newVal => {
    // Check max length
    if (maxLength && newVal.length > maxLength) {
      return false
    }

    // Update local state
    setValue(newVal)

    // Check validation
    const isValid = validator(newVal, name)

    // Update parent state
    handler(name, { value: newVal, valid: isValid })
  }

  const blur = () => {
    // Update focus
    setFocus(false)

    // Check validation
    const isValid = validator(value, name)

    // Update error
    seterror(!isValid)
  }

  const keyDown = e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      submit()
    }
  }

  return (
    <div
      className={`
        textarea-container
        ${(focus || value.length) ? 'has-focus' : ''}
        ${error ? 'has-error' : ''}
      `}
    >
      <label htmlFor={name}>{label}</label>
      <textarea
        ref={textarea}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={blur}
        onChange={e => change(e.target.value)}
        onKeyDown={keyDown}
      />

    </div>
  )
}
