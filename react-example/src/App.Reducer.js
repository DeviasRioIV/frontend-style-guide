const initialState = {
  remember: null,
  token: 'token is...'
}

export const reducer = [reduce, initialState]

function reduce (prevState, action) {

  switch (action.type) {

    case 'UPDATE_REMEMBER':
      return {
        ...prevState,
        remember: action.data
      }
  }
}
