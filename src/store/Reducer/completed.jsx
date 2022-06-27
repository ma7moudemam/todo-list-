const INITIAL_STATE = {
    completed:[]
}


export function completedReducer (state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_COMPLETED':
            return {
                ...state,
                completed: [...state.completed, action.payload]
            }
        case 'REMOVE_COMPLETED':
            return {
                ...state,
                completed: state.completed.filter((completed)=>completed!==action.payload),
            }
        default:
            return state
    }
}