import {Storage, KEYS} from 'model/Storage'
import {isObjectEmpty} from 'model/utils'
import {hasUserEntries} from 'redux/helpers'

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
    UI_SHOW_CLEAR_ENTRIES_CONFIRM: 'UI_SHOW_CLEAR_ENTRIES_CONFIRM',

    UI_SELECT_PANE: 'UI_SELECT_PANE',


    DIALOG_CLOSE: 'DIALOG_CLOSE',
    DIALOG_SHOW_DELETE_USER: 'DIALOG_SHOW_DELETE_USER',
}


export class ActionGenerator {
    static init() {
        return dispatch => {
            dispatch({type: ActionTypes.INIT});

            dispatch(ActionGenerator.setEntries(Storage.getEntries()));
            dispatch(ActionGenerator.setUsers(Storage.getUsers()));
            dispatch(ActionGenerator.UI_selectPane(Storage.get(KEYS.LAST_PANE)))
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

    static clearEntries(request = true) {
        return dispatch => {
            dispatch(ActionGenerator.setEntries( {} ));
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

    static deleteUser(id, force = false) {
        return (dispatch, getState) => {

            const hasEntries = hasUserEntries(id, getState().entries);

            if(hasEntries && !force) {
                dispatch(ActionGenerator.Dialog_showDeleteUser(id));
            }
            else {
                dispatch({type: ActionTypes.DELETE_USER, id});

                Storage.saveUsers(getState().users);
                Storage.saveEntries(getState().entries);

                if(getState().ui.editUsers && isObjectEmpty(getState().users))
                    dispatch(ActionGenerator.UI_editUsers(false));
            }
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

    static UI_showClearEntriesConfirm(show = true) {
        return {type: ActionTypes.UI_SHOW_CLEAR_ENTRIES_CONFIRM, show};
    }


    static UI_selectPane(pane) {
        return dispatch => {
            dispatch({type: ActionTypes.UI_SELECT_PANE, pane});

            Storage.save(KEYS.LAST_PANE, pane);
        }
    }



    static Dialog_close() {
        return {type: ActionTypes.DIALOG_CLOSE};
    }

    static Dialog_showDeleteUser(id) {
        return {type: ActionTypes.DIALOG_SHOW_DELETE_USER, id};
    }
}
