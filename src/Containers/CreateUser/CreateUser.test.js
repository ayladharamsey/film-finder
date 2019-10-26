import React from 'react';
import { shallow } from 'enzyme';
import { CreateUser, mapDispatchToProps } from './CreateUser';


describe('CreateUser container tests', () => {

  it('CreateUser should match its snapshot', () => {
    const wrapper = shallow( <CreateUser  /> )
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

// const mockUser = {
//   name: 'Alan',
//   email: 'alan@turing.io',
//   password: 'password'
// }
// addUser = { jest.fn(mockUser) }