// External modules
import React from 'react'

// Components
import Dropdown from 'Components/Dropdown/Dropdown'

export default function DropdownDocs () {

  return (
    <div>

      <h1>Dropdown Docs:</h1>

      <h4>Features:</h4>

      <ul>

        <li>
          ✓ Recibe un placeholder
        </li>

        <li>
          Mantener placeholder si hay un valor elegido
        </li>

        <li>
          Recibe un valor <i>defaulter</i>
        </li>

        <li>
          Recibe un valor
        </li>

        <li>
          Pasar ícono como prop (para caret, con valor default, nulo es valido)
        </li>

        <li>
          Elegir posición ícono <i>left|right</i>
        </li>

        <li>
          Filtro
        </li>

        <li>
          Múltiples valores (chips)
        </li>

        <li>
          Comportamiento de apertura <i>hover|click</i>
        </li>

        <li>
          Disabled/enabled/loader
        </li>
      </ul>

      <h4>TODOS:</h4>

      <ul>
        <li>
          Handle placeholder for multivalue
        </li>
        <li>
          Javascript set
        </li>
      </ul>

      <h4>Regular:</h4>

      {/* Countries dropdown sample */}
      <Dropdown
        handler={() => {}}
        options={[
          {
            label: 'Argentina',
            value: 1
          },
          {
            label: 'Uruguay',
            value: 2
          }
        ]}
        placeholder='Sample'
        searchable={false}
        value={1}
      />

      <h4>Multi value:</h4>

      {/* Countries dropdown sample */}
      <Dropdown
        handler={() => {}}
        multiValue
        options={[
          {
            label: 'Argentina',
            value: 1
          },
          {
            label: 'Uruguay',
            value: 2
          }
        ]}
        placeholder='Sample'
        searchable={false}
        value={1}
      />
    </div>
  )
}
