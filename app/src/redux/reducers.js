import { combineReducers } from 'redux'
import {ActionTypes} from './actions'


function entries(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ADD_ENTRY:
            console.log('here');
            return Object.assign({}, state, {[action.id]: action.entry})

        default:
            return state;
    }
}



export default combineReducers({entries});
