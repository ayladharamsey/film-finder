export const movieData = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.movies
    case 'FAVE_MOVIE':
      return state.map(movie => {
        return movie.id === action.id ? {...movie, isFavorited: !movie.isFavorited} : movie
      })
    default:
      return state
  }
}