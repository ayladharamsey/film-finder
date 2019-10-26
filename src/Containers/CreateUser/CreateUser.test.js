import React from 'react';
import { shallow } from 'enzyme';
import CreateUser from './CreateUser';


describe('CreateUser container tests', () => {

  it('CreateUser should match its snapshot', () => {
    const mockUser = {
      name: 'Alan',
      email: 'alan@turing.io',
      password: 'password'
  }
    const wrapper = shallow( <CreateUser 
      addUser={jest.fn(mockUser)} /> )
    expect(wrapper).toMatchSnapshot();
  })
})


// it('should match snapshot', () => {
//   const wrapper = shallow(<UserForm
//     user={
//       ({
//         name: 'kate',
//         quote: 'hello',
//         knowledgeLevel: 'Star What?'
//       })}
//     submitUser={jest.fn()}
//   />)
//   expect(wrapper).toMatchSnapshot();
// })