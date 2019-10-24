import { combineReducers } from 'redux';
import { movieData } from './movieData';
import { favoritedMovie } from './favoritedMovie';
import { user } from './user';
import { loading } from './loading'
import { hasErrored } from './errorMsg'

export const rootReducer = combineReducers({
  movieData,
  favoritedMovie,
  user,
  loading,
  hasErrored
});

