import { movieData } from './movieData';
import { hasErrored } from './errorMsg';

describe('movie Data Reducer', () => {
  it('Should return the initial state', () => {
    const expected = [];
    const result = movieData(undefined, {});
    expect(result).toEqual(expected);
  });

  it ('Should return action.movies if action.type is SET_MOVIES', () => {
    const mockMovieData = [{id: 4, title: "A Movie"}, {id: 6, title: "Another Movie"}];
    const mockAction = {type: 'SET_MOVIES', movies: mockMovieData};
    const result = movieData([], mockAction);
    expect(result).toEqual(mockMovieData)
  });

  it ('Should favorite a movie when passed its id', () => {
    const mockMovieData = [{id: 4, title: "A Movie", isFavorited: false}];
    const mockSetMovies = {type: 'SET_MOVIES', movies: mockMovieData};
    const mockState = movieData([], mockSetMovies)
    const mockAction = {type: "FAVE_MOVIE", id: 4};
    const result = movieData(mockState, mockAction)
    expect(result).toEqual([{id: 4, title: "A Movie", isFavorited: true}]);
  })
});

describe('errorMsg reducer', () => {

  it('should return an intial state of empty strink', () => {
    
  })

  it('should return error message when case is HAS_ERRORED', () => {
    const mockErrorAction = {type: 'HAS_ERRORED', error: 'Error Message'}
    const result = hasErrored('', mockErrorAction)
    expect(result).toEqual('Error Message')
  })
})

