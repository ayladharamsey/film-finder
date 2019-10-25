export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log(action.user)
      return action.user
    default:
      return state
  }
}
