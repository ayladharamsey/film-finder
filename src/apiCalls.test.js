import { getMovies, loginUserCheck, createNewUser, getFavorites } from './apiCalls'

describe('getMovies', () => {
  let mockMovies = [{
    "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
    "id": 338967,
    "title": "Zombieland: Double Tap",
    "vote_average": 7.3,
    "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
    "release_date": "2019-10-18"
  },
  {
    "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
    "id": 290859,
    "title": "Terminator: Dark Fate",
    "vote_average": 7.4,
    "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
    "release_date": "2019-11-01"
  }];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      })
    })
  });

  it.only('should fetch with the correct URL', () => {
    const apiKey = '0f1d43bea84ed1843958538d348af0d5';
    const upcomingMovies = '/popular/';
    getMovies();
    expect(window.fetch).toHaveBeenCalledWith(`https://api.themoviedb.org/3/movie${upcomingMovies}?api_key=${apiKey}`)
  });

  it.only('should return an array of movies (HAPPY)', () => {
    expect(getMovies()).resolves.toEqual(mockMovies);
  });

  it.only('should throw an error if something goes wrong (SAD)', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: false
    })
  });

  expect(getMovies()).rejects.toEqual(Error('Woops! Something went wrong'))
  });
});


describe('loginUserCheck', () => {
  let mockUserRes = {
    id: 34,
    name: 'Alan',
    email: 'alan@turing.',
    password: 'password'
  }
  let mockUser = {
    email: 'alan@turing.io',
    password: 'password'
  }
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserRes)
      })
    })
  });

  it.only('should be called with the correct arguments', () => {
    const expected = ['http://localhost:3001/api/v1/login', {
      method: 'POST',
      body: JSON.stringify(mockUser),
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    loginUserCheck(mockUser);
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });

  it.only('should return a user with an id (HAPPY)', () => {
    expect(createNewUser(mockUser)).resolves.toEqual(mockUserRes);
  });

  it.only('should tell us if the email or password is wrong if the res has a status of 401 (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 401
      })
    })
    expect(createNewUser(mockUser)).rejects.toEqual(Error('email or password is incorrect'))
  })

  it.only('should throw an error if something else goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(createNewUser(mockUser)).rejects.toEqual(Error('Something went wrong!'))
  })
})


describe('createNewUser', () => {
  let mockUserRes = {
    id: 2,
    name: 'Kate',
    email: 'k@gmail.com',
    password: 'password'
  }
  let mockUser = {
    name: 'Kate',
    email: 'k@gmail.com',
    password: 'password'
  }
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserRes)
      })
    })
  });

  it.only('should fetch with the correct arguments', () => {
    const expected = ['http://localhost:3001/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(mockUser),
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    createNewUser(mockUser);
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });

  it.only('should return a user with an id (HAPPY)', () => {
    expect(createNewUser(mockUser)).resolves.toEqual(mockUserRes);
  });

  it.only('should tell us an email is already a user if the res has a status of 500 (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 500
      })
    })
    expect(createNewUser(mockUser)).rejects.toEqual(Error('This email has already has a profile. '))
  });

  it.only('should throw an error if something else goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(createNewUser(mockUser)).rejects.toEqual(Error('Something went wrong!'))
  })
});


describe('getFavorites', () => {
  let mockFaves = [{
    user_id: 5,
    "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
    "id": 338967,
    "title": "Zombieland: Double Tap",
    "vote_average": 7.3,
    "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
    "release_date": "2019-10-18"
  },
  {
    user_id: 5,
    "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
    "id": 290859,
    "title": "Terminator: Dark Fate",
    "vote_average": 7.4,
    "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
    "release_date": "2019-11-01"
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ favorites: mockFaves })
      })
    })
  });

  it.only('should be called with the correct arguments', () => {
    let mockUserId = 5;
    const expected = `http://localhost:3001/api/v1/users/${mockUserId}/moviefavorites`
    getFavorites(5);
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it.only('should return an array of favorites (HAPPY)', () => {
    expect(getFavorites(5)).resolves.toEqual(mockFaves);
  });

  it.only('should throw an error if something goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getFavorites(4)).rejects.toEqual(Error('Unable to get favorites'));
  })
});

