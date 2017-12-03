import { combineReducers } from 'redux'
import {ActionTypes} from './actions'
import {Storage} from 'model/Storage'


function entries(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ADD_ENTRY:
            return Object.assign({}, state, {[action.id]: action.entry});

        case ActionTypes.SET_ENTRIES:
            return Object.assign({}, action.entries);

        default:
            return state;
    }
}


function users(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});

        case ActionTypes.SET_USERS:
            return Object.assign({}, action.users);

        default:
            return state;
    }
}


function ui(state = {displayAddUserForm: false}, action) {
    switch (action.type) {
        case ActionTypes.UI_DISPLAY_ADD_USER:
            return Object.assign({}, state, {displayAddUserForm: action.display});

        case ActionTypes.UI_TOGGLE_ADD_USER:
            return Object.assign({}, state, {displayAddUserForm: !state.displayAddUserForm});

        default:
            return state;
    }
}


export default combineReducers({entries, users, ui});
