export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
})

export const faveMovie = favorites => ({
  type: 'FAVE_MOVIE',
  favorites
});

export const setUser = user => ({
  type: 'SET_USER',
  user
});

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
});

export const hasErrored = error => ({
  type: 'HAS_ERRORED',
  error
});

export const setFaves = favorites => ({
  type: 'SET_FAVORITES',
  favorites
});