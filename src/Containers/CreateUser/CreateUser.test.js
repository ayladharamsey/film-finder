import React from 'react';
import { shallow } from 'enzyme';
import { CreateUser, mapDispatchToProps } from './CreateUser';

describe('CreateUser container tests', () => {

  it('CreateUser should match its snapshot', () => {
    const wrapper = shallow( <CreateUser  /> )
    expect(wrapper).toMatchSnapshot();
  })
})
