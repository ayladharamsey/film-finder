import React from 'react';
import { shallow } from 'enzyme';
import { MovieInfo } from './MovieInfo';

describe('MovieInfo container tests', () => {

  it('Movie should match its snapshot', () => {
    const wrapper = shallow( <MovieInfo/> )
    expect(wrapper).toMatchSnapshot();
  })
})