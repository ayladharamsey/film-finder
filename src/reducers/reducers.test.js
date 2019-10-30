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

  it ('')
});