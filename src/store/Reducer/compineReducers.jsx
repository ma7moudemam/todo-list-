import { combineReducers } from 'redux'
import {themeReducer} from './theme'
import {todoReducer} from './todo'
import {completedReducer} from './completed'
import {listStateReducer} from './listState'


export default combineReducers({
    theme:themeReducer,
    todo:todoReducer,
    completed:completedReducer,
    listState:listStateReducer
})