export const favoritedMovie = (state = [], action) => {
  switch (action.type) {
    case 'FAVE_MOVIE':
      return action.id
    default:
      return state
  }
}