// External modules
import React from 'react'

// Components
import Modal from 'Components/Modal/Modal'

export default function ModalDocs () {

  // Local state
  const [modalOpen, setModalOpen] = React.useState(false)
  const [name, setName] = React.useState('')

  return (
    <div>

      <h1>Modal Docs:</h1>

      <strong>Lo trae @fabri de appliance</strong>

      <h4>Features:</h4>

      <ul>

        <li>
          ✓ Botón de cierre (opcional)
        </li>

        <li>
          ✓ Cierre por backdrop (opcional)
        </li>

        <li>
          Enter transitions (top-left-right-bottom)
        </li>
      </ul>

      <h2>Name is: {name}</h2>

      <button onClick={() => setModalOpen(true)}>
        Open modal
      </button>

      <Modal
        backdrop
        btnClose
        open={modalOpen}
        setOpen={setModalOpen}
      >
        <h1>Modal content</h1>

        <input
          type='text'
          onChange={e => setName(e.target.value)}
          value={name}
        />

        <button
          onClick={() => setModalOpen(false)}
        >
          ¿Estas seguro?
        </button>
      </Modal>
    </div>
  )
}
