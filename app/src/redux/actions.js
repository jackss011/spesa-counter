
export const ActionTypes = {
    ADD_ENTRY: 'ADD_ENTRY',
}


export default class ActionGenerator {
    static addEntry(entry) {
        return {type: ActionTypes.ADD_ENTRY, entry};
    }
}
