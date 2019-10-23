export const favoritedMovie = (state = [], action) => {
  switch (action.type) {
    case 'FAVE_MOVIE':
      return action.favorites
    default:
      return state
  }
}