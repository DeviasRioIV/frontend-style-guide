// External modules
import React from 'react'

// Internal modules

export default function TextInputDocs () {

  // Local state
  const [loading, setLoading] = React.useState(true)

  // Mount effect
  React.useEffect(() => {}, [])

  // Methods
  const method = () => {}

  return (
    <div>

      <h1>TextInput Docs:</h1>

      <strong>Lo trae @bruno de recuperos</strong>

      <h4>Features:</h4>

      <ul>

        <li>
          Label "flotante"
        </li>

        <li>
          Placeholder empuja al label
        </li>

        <li>
          Recibe un validator como prop
        </li>

        <li>
          Recibe un handler como prop
        </li>

        <li>
          Recibe un submit como prop
        </li>

        <li>
          Recibe un ícono (opcional)
        </li>

        <li>
          Recibe un tipo <i>text|email|password</i>
        </li>

        <li>
          Recibe disabled val
        </li>
      </ul>
    </div>
  )
}
