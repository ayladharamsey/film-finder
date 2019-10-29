export const favorites = (state = [], action ) => {
    switch(action.type) {
        case 'SET_FAVES' :
            return action.faves
        default:
            return state
    }
}