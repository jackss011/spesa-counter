
export default class User {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    set id(id) {
        if(!id) return;
        this._id = id;
    }

    set name(name) {
        if(!name) return;
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

    static fromJSON(json) {
        let user = new User();

        user.id = json._id;
        user.name = json._name;

        return user;
    }
}
