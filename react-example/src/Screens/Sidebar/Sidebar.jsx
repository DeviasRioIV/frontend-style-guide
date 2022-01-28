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

      <h4 style={{color: 'red'}}>Pending:</h4>

      <ul>
        <li><strong>hierarchyType</strong> needs the accordion component</li>
        <li><strong>account</strong> needs the account component</li>
      </ul>

      <strong>Parcialmente implementado</strong>

      <h4>Features:</h4>

      <ul>

        <li>
          ✓ Recibe las rutas como props
        </li>

        <li>
          ✓ Tiene que poder procesar rutas de múltiples jerarquías
        </li>

        <li>
          ✓ Las rutas tienen un <i>label</i>: nombre a mostrar
        </li>

        <li>
          ✓ Las rutas tienen un <i>path</i>: URL para la ruta
        </li>

        <li>
          ✓ Las rutas tienen un <i>icono</i>: ícono a mostrar
        </li>

        <li>
          ✓ Se tiene que poder elegir la posición del ícono <i>left|right</i>
        </li>

        <li>
          ✓ Modo mobile (analizar header)
        </li>

        <li>
          x Capacidad para mostrar usuario
        </li>

        <li>
          Comportamiento de apertura <i>push|float</i> <strong>analizar</strong>
        </li>
      </ul>

      <h4>Props</h4>
      <ul>
        <li>
          <strong>routes</strong>
          <br />
          <i>array</i>
          <br />

          <p>Routes is an array of objects with a list of routes to display</p>

          <p>Sidebar component gets it's routes from a prop, but they need to have the following structure:</p>

          <pre>
{`
  {
    component: <Component />,
    icon: <Component />,
    index: bool,
    label: string,
    path: string | array,
    sidebar: bool
  }
`}
          </pre>

          <ul>
            <li>
              <strong>Component:</strong> Is the component to render in the route
            </li>

            <li>
              <strong>Icon:</strong> The icon to display beside the route
            </li>

            <li>
              <strong>Index:</strong> Determines if this is the index route
            </li>

            <li>
              <strong>Label:</strong> Is the route name to display
            </li>

            <li>
              <strong>Path:</strong> Is the URL for the route
            </li>
            
            <li>
              <strong>Sidebar:</strong> Determines if this route should be displayed on the sidebar
            </li>
          </ul>

          <p>Routes can have different hierarchy levels:</p>

          <p>One hierarchy level:</p>

          <pre>
{`
  [
    {
      ...route
    },
    {
      ...route
    }
  ]
`}
          </pre>

          <p>Two hierarchy level:</p>

          <pre>
{`
  [
    {
      name: string,
      routes: [
        { ...route },
        { ...route }
      ]
    },
    {
      name: string,
      routes: [
        { ...route },
        { ...route }
      ]
      sidebar: true,
    }
  ]
`}
          </pre>
        </li>

        <li>
          <strong>hierarchyType:</strong>
          <br />
          <i>string | optional</i>
          <br />

          <p>Determines the type of hierarchy.</p>

          <p>Valid values are:</p>

          <ul>
            <li><strong>accordion</strong> Groups routes inside an accordion</li>
            <li><strong>group</strong> Groups routes with spacing and a title (name)</li>
          </ul>

          <br />
        </li>

        <li>

          <strong>iconPosition</strong>
          <br />
          <i>string | optional</i>
          <br />

          <p>
            Determines icon position if it's present in the route
          </p>

          <p>
            Valid values: <strong>left | right</strong>
          </p>
        </li>
      </ul>
    </div>
  )
}
