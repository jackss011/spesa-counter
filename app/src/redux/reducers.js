import { combineReducers } from 'redux'
import {ActionTypes} from './actions'
import {Storage} from 'model/Storage'
import {deleteAllEntriesWithId} from './helpers'
import {isObjectEmpty} from 'model/utils'


function entries(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ADD_ENTRY:
            return Object.assign({}, state, {[action.id]: action.entry});

        case ActionTypes.SET_ENTRIES:
            return Object.assign({}, action.entries);

        case ActionTypes.DELETE_USER:
            let id = action.id;
            let entries = Object.assign({}, state);
            deleteAllEntriesWithId(entries, id);
            return entries;

        case ActionTypes.DELETE_ENTRY:
            let mid = Object.assign({}, state);
            delete mid[action.id];
            return mid;

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

        case ActionTypes.DELETE_USER:
            const mid = Object.assign({}, state);
            delete mid[action.id];
            return mid;

        default:
            return state;
    }
}


const uiInitState = {
    displayAddUserForm: false,
    editUsers: false,
    editEntries: false,
    clearEntriesConfirm: false,
    selectedPane: 'USERS',
}

function ui(state = uiInitState, action) {
    switch (action.type) {
        case ActionTypes.UI_DISPLAY_ADD_USER:
            return Object.assign({}, state, {displayAddUserForm: action.display});

        case ActionTypes.UI_TOGGLE_ADD_USER:
            return Object.assign({}, state, {displayAddUserForm: !state.displayAddUserForm});


        case ActionTypes.UI_EDIT_USERS:
            return Object.assign({}, state, {editUsers: action.edit});

        case ActionTypes.UI_TOGGLE_EDIT_USERS:
            return Object.assign({}, state, {editUsers: !state.editUsers});


        case ActionTypes.UI_EDIT_ENTRIES:
            return Object.assign({}, state, {editEntries: action.edit});

        case ActionTypes.UI_SHOW_CLEAR_ENTRIES_CONFIRM:
            return Object.assign({}, state, {clearEntriesConfirm: action.show});

        case ActionTypes.SET_ENTRIES:
            if(isObjectEmpty(action.entries))
                return Object.assign({}, state, {clearEntriesConfirm: false})
            else
                return state;


        case ActionTypes.UI_SELECT_PANE:
            return Object.assign({}, state, {selectedPane: action.pane});




        default:
            return state;
    }
}


function mainDialog(state = {}, action) {
    switch(action.type) {
        case ActionTypes.DIALOG_SHOW_DELETE_USER:
            return {type: 'DELETE_USER', id: action.id};

        case ActionTypes.DIALOG_CLOSE:
            return {};

        case ActionTypes.DELETE_USER:
            if(state.type === 'DELETE_USER') return {};
            return state;

        default:
            return state;
    }

}


export default combineReducers({entries, users, ui, mainDialog});
