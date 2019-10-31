import { user } from './user';

describe('user', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = user(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set user', () => {
    const expected = {
      id: 5,
      name: 'kate',
      email: 'kate@gmail.com'
    };
    const actionType = 'SET_USER';
    const result = user(expected, actionType);
    expect(result).toEqual(expected);
  });


});