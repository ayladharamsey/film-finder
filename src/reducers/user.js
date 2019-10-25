export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log(action.user)
      return action.user
    default:
      return state
  }
}


// case 'CREATE_USER':
//   return {
//   name: action.name,
//   email: action.email,
//   password: action.password
// }
    
//     default:
// return state;