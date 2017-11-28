
export const ActionTypes = {
    ADD_ENTRY: 'ADD_ENTRY',

    ADD_USER: 'ADD_USER',
}


export default class ActionGenerator {
    static addEntry(id, entry) {
        return {type: ActionTypes.ADD_ENTRY, id, entry};
    }

    static addUser(user) {
        return {type: ActionTypes.ADD_USER, user};
    }
}
