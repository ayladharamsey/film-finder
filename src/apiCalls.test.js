import { getMovies, loginUserCheck, createNewUser, getFavorites } from './apiCalls'

describe('apiCalls', () => {

  const mockMovies = [{ id: 4, title: "The Awakening" }, { id: 2, title: "Return To Sleep" }, { id: 6, title: "Sweet Dreams" }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      })
    });
  })

  it.only('should call fetch with the correct url', () => {
    const apiKey = '0f1d43bea84ed1843958538d348af0d5';
    const upcomingMovies = '/popular/';
    getMovies()
    expect(window.fetch).toHaveBeenCalledWith(`https://api.themoviedb.org/3/movie${upcomingMovies}?api_key=${apiKey}`)
  })

})

describe('loginUserCheck', () => {
  let mockUser = {
    email: "alan@turing.io",
    password: "password"
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockLogin)
      });
    });
  });

  it.only('should fetch with the correct arguments', () => {
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
});

describe('createNewUser', () => {
  let mockUser = { 
    name: "Kate", 
    email: "kr@gmail.com", 
    password: "12356"
}
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUser)
      });
    });
  });

  it.only('should fetch with the correct arguments when createNewUser is called', () => {
    const expected = ['http://localhost:3001/api/v1/users', {
      method: 'POST', 
      body: JSON.stringify(mockUser),
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    createNewUser(mockUser);
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })
})