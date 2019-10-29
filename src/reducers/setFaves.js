export const favorites = (state = [], action ) => {
    switch(action.type) {
        case 'SET_FAVES' :
            console.log(action.faves)
            // if(state.forEach(movie => movie_id === ))
        default:
            return state
    }
}