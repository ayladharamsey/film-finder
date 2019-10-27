import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps} from './Login';

describe('Login container tests', () => {

  it('Login should match its snapshot', () => {
    const wrapper = shallow( <Login /> )
    expect(wrapper).toMatchSnapshot();
  })
})