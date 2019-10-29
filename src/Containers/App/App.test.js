import React from 'react';
import { shallow } from 'enzyme';
import {
  App,
  mapStateToProps,
  mapDispatchToProps
} from './App';

describe('App', () => {

  let mockMovies = "favorites"[{
    "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
    "id": 290859,
    "title": "Terminator: Dark Fate",
    "vote_average": 7.4,
    "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
    "release_date": "2019-11-01"
  },
    {
      "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
      "id": 338967,
      "title": "Zombieland: Double Tap",
      "vote_average": 7.3,
      "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
      "release_date": "2019-10-18"
    }]

  let mockFaves = "favorites"[{
    "id": 338967,
    "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
    "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
    "release_date": "2019-10-18",
    "title": "Zombieland: Double Tap",
    "user_id": 5,
    "vote_average": 7.3
  },
    {
      "id": 290859,
      "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "release_date": "2019-11-01",
      "title": "Terminator: Dark Fate",
      "user_id": 5,
      "vote_average": 7.4
    }]


  let mockUser = {
    email: 'alan@turing.io',
    password: 'password'
  }
  
  const mockHasErrored = jest.fn()
  const mockSetMovies = jest.fn()
  const mockSetUser = jest.fn()
  const mockSetFaves = jest.fn()
  const mockFaveMovies = jest.fn()
  const mockGetMovies = jest.fn()

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      });
    });
  });

  it('App should match its snapshot', () => {
    const wrapper = shallow(<App 
      getMovies={mockGetMovies}
      movieData={mockMovies}
      user={mockUser}
      loading={false}
      hasErrored={mockHasErrored}
      favorites={mockFaves}
      setMovies={mockSetMovies}
      faveMovie={mockFaveMovies}
      setUser={mockSetUser}
      isLoading={false}
      setFaves={mockSetFaves}
      />)

    expect(wrapper).toMatchSnapshot();
  })
})
























