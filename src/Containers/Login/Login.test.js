import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login container tests', () => {

  it('CreateUser should match its snapshot', () => {
    const wrapper = shallow( <Login /> )
    expect(wrapper).toMatchSnapshot();
  })
})