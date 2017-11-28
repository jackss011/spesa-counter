
export const ActionTypes = {
    ADD_ENTRY: 'ADD_ENTRY',
}


export default class ActionGenerator {
    static addEntry(id, entry) {
        return {type: ActionTypes.ADD_ENTRY, id, entry};
    }
}
