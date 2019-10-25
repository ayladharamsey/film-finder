import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard } from './MovieCard';

describe('MovieCard container tests', () => {

  it('MovieCard should match its snapshot', () => {
    const wrapper = shallow( <MovieCard /> )
    expect(wrapper).toMatchSnapshot();
  })
})