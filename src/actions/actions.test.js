import * as actions from './index';

describe('Actions', () => {

    beforeEach(() => {
        
    })

    it('should have a type of SET_MOVIES', () => {
        const movies = [{title: 'my little pony'}, { title: 'cool kids usa'}];
        const expected = {
            type: 'SET_MOVIES',
            movies
        }

        const result = actions.setMovies(movies)
        expect(result).toEqual(expected)

    })

    it('should have a type of SET_FAVES', () => {
        const faves = [{
            "movie_id": 1,
            "title": "sample",
            "poster_path": "example",
            "release_date": "2019-10-18",
            "vote_average": "5.8",
            "overview": "once upon a time"
      }]
        const expected = {
            type: 'SET_FAVES',
            faves
        }
        const result = actions.setFaves(faves)
        expect(result).toEqual(expected)
    })

    it('should have a type of FAVE_MOVIE', () => {
        const id = 123;
        const expected = {
            type: 'FAVE_MOVIE',
            id 
        };
        const result = actions.faveMovie(id);
        expect(result).toEqual(expected);
    })

    it('should have a type of SET_USER', () => {
        const user = {
            id: 123,
            name: 'Ayla',
            email: 'ayla@gmail.com', 
            password: 'potato skins'
        }
        const expected = {
            type: 'SET_USER',
            user
        }
        const result = actions.setUser(user);
        expect(result).toEqual(expected)
    })

    it('should have a type of IS_LOADING if it is true', () => {
        const bool = true
        const expected = {
            type: 'IS_LOADING',
            bool
        }
        const result = actions.isLoading(bool);
        expect(result).toEqual(expected)
    })

    it('should have a type of IS_LOADING if it is false', () => {
        const bool = false
        const expected = {
            type: 'IS_LOADING',
            bool
        }
        const result = actions.isLoading(bool);
        expect(result).toEqual(expected)
    })


})