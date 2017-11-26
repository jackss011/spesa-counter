
const ActionTypes = {
    ADD_ENTRY: 'ADD_ENTRY',
}

class ActionGenerator {
    static addEntry(entry) {
        return {type: ADD_ENTRY, entry};
    }
}
