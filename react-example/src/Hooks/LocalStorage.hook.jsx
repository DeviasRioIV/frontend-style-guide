// External modules
import React from 'react'

export default function useLocalStorage (itemName, initialValue) {

  // Local state
  const [error, setError] = React.useState(false)
  const [item, setItem]   = React.useState(initialValue)

  // Mount effect
  React.useEffect(() => {

    try {

      const localStorageItem = localStorage.getItem(itemName)

      let parsedItem

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }

      setItem(parsedItem)

    } catch (error) {
      setError(error)
    }

  }, [])

  // Methods
  const saveItems = newItem => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return { item, saveItems, error }
}
