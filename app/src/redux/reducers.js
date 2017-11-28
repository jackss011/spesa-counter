import { combineReducers } from 'redux'
import {ActionTypes} from './actions'


function entries(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ADD_ENTRY:
            return Object.assign({}, state, {[action.id]: action.entry})

        default:
            return state;
    }
}

function users(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})

        default:
            return state;
    }
}



export default combineReducers({entries, users});
