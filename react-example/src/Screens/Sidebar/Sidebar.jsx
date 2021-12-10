// External modules
import React from 'react'

// Internal modules

export default function SidebarDocs () {

  // Local state
  const [loading, setLoading] = React.useState(true)

  // Mount effect
  React.useEffect(() => {}, [])

  // Methods
  const method = () => {}

  return (
    <div>

      <h1>Sidebar Docs</h1>

      <strong>Parcialmente implementado</strong>

      <h4>Features:</h4>

      <ul>

        <li>
          Modo mobile (analizar header)
        </li>

        <li>
          Recibe las rutas como props
        </li>

        <li>
          Tiene que poder procesar rutas de múltiples jerarquías
        </li>

        <li>
          Las rutas tienen un <i>label</i>: nombre a mostrar
        </li>

        <li>
          Las rutas tienen un <i>path</i>: URL para la ruta
        </li>

        <li>
          Las rutas tienen un <i>icono</i>: ícono a mostrar
        </li>

        <li>
          Se tiene que poder elegir la posición del ícono <i>left|right</i>
        </li>

        <li>
          Capacidad para mostrar usuario
        </li>

        <li>
          Background
        </li>

        <li>
          Link color
        </li>

        <li>
          Active link color
        </li>

        <li>
          Comportamiento de apertura <i>push|float</i> <strong>analizar</strong>
        </li>
      </ul>
    </div>
  )
}
