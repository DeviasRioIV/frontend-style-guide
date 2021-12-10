// External modules
import React from 'react'

export default function TextInput (props) {

  // Props
  const {
    initialVal,
    type,
    label,
    name,
    placeholder,
    maxLength,
    disabled,
    optional,
    passVal,
    handler,
    submit
  } = props

  // Local state
  const [value, setValue]       = React.useState('')
  const [focus, setFocus]       = React.useState(false)
  const [error, setError]       = React.useState(false)
  const [showPass, setShowPass] = React.useState(false)

  // Constants
  const inputEl = React.useRef(null)

  React.useEffect(() => {

    // Check autofill
    setTimeout(() => {

      const isFilled = inputEl.current.matches(':-internal-autofill-selected')

      if (isFilled) {
        setFocus(true)
      }
    }, 0)

    // Set initial value
    setValue(initialVal || '')
  }, [])

  // Methods
  const change = newVal => {

    // Check max length
    if (maxLength && newVal.length > maxLength) {
      return false
    }

    // Update local state
    setValue(newVal)

    // Check validation
    const isValid = validate(newVal)

    // Update parent state
    handler(name, { value: newVal, valid: isValid })
  }

  const blur = () => {

    // Update focus
    setFocus(false)

    // Check validation
    const isValid = validate(value)

    // Update error
    setError(!isValid)
  }

  const validate = value => {

    let valid
    const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    switch (name) {
      case 'companyName':
      case 'firstName':
      case 'lastName':
      case 'city':
      case 'promoCode':
      case 'address':
      case 'address2':
      case 'zip':
      case 'storeType':
      case 'accountDetails':
      case 'website':
      case 'referred':
      case 'moreInfo':
        valid = value.length > 2
        break

      case 'cell':
      case 'mobile':
        valid = value > 1
        break

      case 'email':
      case 'payPalAccount':
        valid = value.length > 2 && regex.test(value)
        break

      case 'password':
        valid = value.length >= 6
        break

      case 'confirm':
        valid = value === passVal
        break
      case 'length':
        valid = parseInt(value) <= 30
        break

      default:
        valid = value > 0
    }

    if (optional) {
      valid = true
    }

    return valid
  }

  const keyDown = e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      submit()
    }
  }

  return (
    <div
      className={`
        input-container
        ${(focus || value.length) ? 'has-focus' : ''}
        ${error ? 'has-error' : ''}
      `}
    >
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputEl}
        type={
          type === 'password' ? (showPass ? 'text' : type) : type
        }
        placeholder={placeholder}
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
