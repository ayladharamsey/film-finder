import { movieData } from './movieData';

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

