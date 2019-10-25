import { getMovies } from './apiCalls'

describe('apiCalls', () => {

  const mockMovies = [{id: 4, title: "The Awakening"},{id: 2, title: "Return To Sleep"},{id: 6, title: "Sweet Dreams"}]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      })
    });
  })

  it('should call fetch with the correct url', () => {
    const apiKey = '0f1d43bea84ed1843958538d348af0d5';
    const upcomingMovies = '/popular/';
    getMovies()
    expect(window.fetch).toHaveBeenCalledWith(`https://api.themoviedb.org/3/movie${upcomingMovies}?api_key=${apiKey}`)
  })
})