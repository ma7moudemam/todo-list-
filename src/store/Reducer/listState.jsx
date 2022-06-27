const INITIAL_STATE = {
    listState: 'All',
}


export function listStateReducer (state = INITIAL_STATE, action){
    switch(action.type){
        case 'LIST_STATE':
            return {
                ...state,
                listState: action.payload,
            }
        default:
            return state
    }
}