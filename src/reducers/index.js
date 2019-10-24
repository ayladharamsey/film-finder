import { combineReducers } from 'redux';
import { movieData } from './movieData';
import { user } from './user';
import { loading } from './loading'
import { hasErrored } from './errorMsg'

export const rootReducer = combineReducers({
  movieData,
  user,
  loading,
  hasErrored
});

