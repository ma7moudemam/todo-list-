
const currentTheme = localStorage.getItem('theme') || 'light';

const INITIAL_STATE ={
    theme: currentTheme,
}

export function themeReducer(state =INITIAL_STATE ,action){
    switch(action.type){
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: action.payload,
                
            }
        default:
            return state
        }
}