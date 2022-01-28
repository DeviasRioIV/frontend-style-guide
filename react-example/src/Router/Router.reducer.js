const initialState = {
  sidebarOpen: true
}

export const reducer = [reduce, initialState]

function reduce (prevState, action) {

  switch (action.type) {

    case 'UPDATE_SIDEBAR_OPEN':
      prevState.sidebarOpen = action.data
  }

  return { ...prevState }

}
