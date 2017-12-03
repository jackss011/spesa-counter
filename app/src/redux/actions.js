import {Storage} from 'model/Storage'

export const ActionTypes = {
    INIT: 'INIT',

    ADD_ENTRY: 'ADD_ENTRY',
    SET_ENTRIES: 'SET_ENTRIES',

    ADD_USER: 'ADD_USER',
    SET_USERS: 'SET_USERS',

    UI_DISPLAY_ADD_USER: 'UI_DISPLAY_ADD_USER',
    UI_TOGGLE_ADD_USER: 'UI_TOGGLE_ADD_USER',
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
        return {type: ActionTypes.SET_ENTRIES, entries};
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


    static UI_displayAddUserForm(display) {
        return {type: ActionTypes.UI_DISPLAY_ADD_USER, display};
    }

    static UI_toggleAddUserForm() {
        return {type: ActionTypes.UI_TOGGLE_ADD_USER};
    }
}
