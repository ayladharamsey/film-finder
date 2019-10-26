import React from 'react';
import { shallow } from 'enzyme';
import { CreateUser } from './CreateUser';

describe('CreateUser container tests', () => {

  it('CreateUser should match its snapshot', () => {
    const wrapper = shallow( <CreateUser /> )
    expect(wrapper).toMatchSnapshot();
  })
})