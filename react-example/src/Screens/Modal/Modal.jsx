// External modules
import React from 'react'

// Internal modules

export default function ModalDocs () {

  // Local state
  const [loading, setLoading] = React.useState(true)

  // Mount effect
  React.useEffect(() => {}, [])

  // Methods
  const method = () => {}

  return (
    <div>

      <h1>Modal Docs:</h1>

      <strong>Lo trae @fabri de appliance</strong>

      <h4>Features:</h4>

      <ul>

        <li>
          Botón de cierre (opcional)
        </li>

        <li>
          Cierre por backdrop (opcional)
        </li>
      </ul>
    </div>
  )
}
