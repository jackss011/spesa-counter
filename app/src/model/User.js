
export default class User {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    static isValidId(id) {
        return typeof id === 'string' && /^[a-z]/.test(id) && id.length === 1;
    }
}
