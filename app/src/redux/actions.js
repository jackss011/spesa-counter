import {Storage} from 'model/Storage'
import {isObjectEmpty} from 'model/utils'

export const ActionTypes = {
    INIT: 'INIT',

    ADD_ENTRY: 'ADD_ENTRY',
    SET_ENTRIES: 'SET_ENTRIES',
    DELETE_ENTRY: 'DELETE_ENTRY',

    ADD_USER: 'ADD_USER',
    SET_USERS: 'SET_USERS',
    DELETE_USER: 'DELETE_USER',

    UI_DISPLAY_ADD_USER: 'UI_DISPLAY_ADD_USER',
    UI_TOGGLE_ADD_USER: 'UI_TOGGLE_ADD_USER',

    UI_EDIT_USERS: 'UI_EDIT_USERS',
    UI_TOGGLE_EDIT_USERS: 'UI_TOGGLE_EDIT_USERS',

    UI_EDIT_ENTRIES: 'UI_EDIT_ENTRIES',
}


export class ActionGenerator {
    static init() {
        return dispatch => {
            dispatch({type: ActionTypes.INIT});

            //console.log(Storage.getEntries());
            dispatch(ActionGenerator.setEntries(Storage.getEntries()));

            //console.log(Storage.getUsers());
            dispatch(ActionGenerator.setUsers(Storage.getUsers()));
        }
    }


    static addEntry(id, entry) {
        return (dispatch, getState) => {
            dispatch({type: ActionTypes.ADD_ENTRY, id, entry});

            Storage.saveEntries(getState().entries);
        }
    }

    static setEntries(entries) {
        return (dispatch, getState) => {
            dispatch({type: ActionTypes.SET_ENTRIES, entries});

            Storage.saveEntries(getState().entries);
        }
    }

    static deleteEntry(id) {
        return (dispatch, getState) => {
            dispatch({type: ActionTypes.DELETE_ENTRY, id});

            Storage.saveEntries(getState().entries);

            if(getState().ui.editEntries && isObjectEmpty(getState().entries))
                dispatch(ActionGenerator.UI_editEntries(false));
        }
    }


    static addUser(user) {
        return (dispatch, getState) => {
            dispatch({type: ActionTypes.ADD_USER, user});

            Storage.saveUsers(getState().users);
        }
    }

    static setUsers(users) {
        return {type: ActionTypes.SET_USERS, users};
    }

    static deleteUser(id) {
        return (dispatch, getState) => {
            dispatch({type: ActionTypes.DELETE_USER, id});

            Storage.saveUsers(getState().users);
            Storage.saveEntries(getState().entries);

            if(getState().ui.editUsers && isObjectEmpty(getState().users))
                dispatch(ActionGenerator.UI_editUsers(false));
        }
    }


    static UI_displayAddUserForm(display) {
        return {type: ActionTypes.UI_DISPLAY_ADD_USER, display};
    }

    static UI_toggleAddUserForm() {
        return {type: ActionTypes.UI_TOGGLE_ADD_USER};
    }


    static UI_editUsers(edit) {
        return {type: ActionTypes.UI_EDIT_USERS, edit};
    }

    static UI_toggleEditUsers() {
        return {type: ActionTypes.UI_TOGGLE_EDIT_USERS};
    }

    static UI_editEntries(edit) {
        return {type: ActionTypes.UI_EDIT_ENTRIES, edit};
    }
}
