// External modules
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// Styles
import './Header.less'

export default function HeaderDocs () {

  return (
    <div>

      <h1>Header Docs:</h1>

      <strong>Hace falta implementarlo</strong>

      <h4>Features:</h4>

      <ul>

        <li>
          Enlace logo
        </li>

        <li>
          Elegir la posición del logo <i>left/center/right</i>
        </li>

        <li>
          Menú navegación
        </li>

        <li>
          Icono mobile
        </li>

        <li>
          Sólo modo mobile (solo muestra el ícono para desplegar)
        </li>

        <li>
          Barra de búsqueda
        </li>

        <li>
          Carro
        </li>

        <li>
          Logout
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
      </ul>
    </div>
  )
}
