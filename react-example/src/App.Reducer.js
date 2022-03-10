const initialState = {}

export const reducer = [reduce, initialState]

function reduce (prevState, action) {

  switch (action.type) {

    case 'BOOTSTRAP':
      return {
        ...prevState,
        ...action.data
      }
  }
}
