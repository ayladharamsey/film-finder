import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

describe('Nav container tests', () => {

  it('Nav should match its snapshot', () => {
    const name = {name: 'Steve'}
    const wrapper = shallow( <Nav user={name}/> )
    expect(wrapper).toMatchSnapshot();
  })
})