import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer container tests', () => {

  it('MoviesContainer should match its snapshot', () => {
    const mockMovieData = [{id:1, title:'The Horror'}]
    const wrapper = shallow( <MoviesContainer movieData={mockMovieData} /> )
    expect(wrapper).toMatchSnapshot();
  })
})