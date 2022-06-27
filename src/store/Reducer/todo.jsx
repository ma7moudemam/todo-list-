const INITIAL_STATE = {
    todos: [],
}


export function todoReducer(state=INITIAL_STATE,action) {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todos:state.todos.filter((todo)=>todo!==action.payload),
            };
        default:
            return state;
        }
}