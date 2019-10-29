import React from 'react';
import { shallow } from 'enzyme';
import {
  App,
  mapStateToProps,
  mapDispatchToProps
} from './App';

describe('App container tests', () => {

  it('App should match its snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })
})





























// describe('App redux tests', () => {

//   it('should give an object with: movieData user loading and hasErrored ', () => {
//     // Setup
//     const mockState = {
//       movieData: [{
//         title: 'The Movie!',
//         id: 1,
//         description: 'good'
//       }],
//       user: {id: 12, name: 'Steve'},
//       loading: false,
//       hasErrored: ' error message',
//       tacos: '???',
//       notToday: 'truth'
//     };
//     const expected = {
//       movieData: mockState.movieData,
//       user: mockState.user,
//       loading: mockState.loading,
//       hasErrored: mockState.hasErrored
//     };
//     // Execution
//     const mappedState = mapStateToProps(mockState);
//     // Expectation
//     expect(mappedState).toEqual(expected);
//   });
// })