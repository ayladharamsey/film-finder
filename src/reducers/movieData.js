export const movieData = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.movies
    default:
      return state
  }
}