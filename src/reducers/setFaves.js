export const favorites = (state = [], action ) => {
    switch(action.type) {
        case 'SET_FAVES' :
            action.faves.forEach(fave => state.push(fave))
        default:
            return state
    }
}