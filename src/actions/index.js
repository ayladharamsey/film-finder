export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
});

export const setFaves = faves => ({
  type: 'SET_FAVES',
  faves
});

export const faveMovie = id => ({
  type: 'FAVE_MOVIE',
  id
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
