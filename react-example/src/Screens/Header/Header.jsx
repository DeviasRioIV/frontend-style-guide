// External modules
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// Styles
import './Header.less'

export default function HeaderDocs () {

  return (
    <div>

      <h1>Header Docs:</h1>

      <h4 style={{color: 'red'}}>Pending:</h4>

      <ul>
        <li>Mobile menu animation or dropdown</li>
        <li>Search</li>
        <li>Cart</li>
        <li>Account</li>
      </ul>

      <h4>Props:</h4>

      <ul>
        <li>
          <strong>account</strong>
          <br />
          <i>bool | optional</i>
          <br />
          <p>
            States if the account component should be rendered inside the header
          </p>
        </li>

        <li>
          <strong>backgroundColor</strong>
          <br />
          <i>string | optional</i>
          <br />
          <p>
            Sets the background color for the header
          </p>
        </li>

        <li>
          <strong>burgerMenu</strong>
          <br />
          <i>bool | optional</i>
          <br />
          <p>
            Specifies if the menu should only display in "burger" mode
          </p>
        </li>

        <li>
          <strong>cart</strong>
          <br />
          <i>bool | optional</i>
          <br />
          <p>
            Specifies if the cart component should be displayed
          </p>
        </li>

        <li>
          <strong>links</strong>
          <br />
          <i>array | optional</i>
          <br />
          <p>
            List of links to display in the header
          </p>
          <pre>
{`
  [
    {
      url: string,
      label: string
    },
    {
      label: string,
      links: [
        {
          url: string,
          label: string
        }
      ]
    }
  ]
`}
          </pre>
        </li>

        <li>
          <strong>linkColor</strong>
          <br />
          <i>string (hex|rgba) | optional</i>
          <br />
          <p>
            Specifies the color of a regular link
          </p>
        </li>

        <li>
          <strong>linkActiveColor</strong>
          <br />
          <i>string (hex|rgba) | optional</i>
          <br />
          <p>
            Specifies the color of the active link
          </p>
        </li>

        <li>
          <strong>logoImg</strong>
          <br />
          <i>string or img | required</i>
          <br />
          <p>
            Specifies the logo img to display in the header
          </p>
        </li>

        <li>
          <strong>logoPosition</strong>
          <br />
          <i>string | optional</i>
          <br />
          <p>
            Specifies the position of the logo
          </p>
        </li>

        <li>
          <strong>logoUrl</strong>
          <br />
          <i>string | optional</i>
          <br />
          <p>
            Specifies if the logo should have a URL
          </p>
        </li>

        <li>
          <strong>menuIcon</strong>
          <br />
          <i>string or icon | optional</i>
          <br />
          <p>
            Replaces the default mobile icon
          </p>
        </li>

        <li>
          <strong>search</strong>
          <br />
          <i>bool | optional</i>
          <br />
          <p>
            Displays the search icon
          </p>
        </li>

        <li>
          <strong>sticky</strong>
          <br />
          <i>bool | optional</i>
          <br />
          <p>
            Sticks the header to the top of the screen
          </p>
        </li>
      </ul>
    </div>
  )
}
