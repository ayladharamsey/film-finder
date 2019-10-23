export const movieData = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.errorMsg
    default:
      return state
  }
}