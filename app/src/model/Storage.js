import {Entry} from 'model/Entry'
import User from 'model/User'


const PREFIX="spesa-counter"

const KEYS = {
    LAST_ENTRIES: 'last-entries',
    LAST_USERS: 'last-users',
    LAST_PANE: 'last-pane',
}

export {PREFIX, KEYS}

export class Storage {
    static save(key, value) {
        localStorage.setItem(prefix(key), value);
    }

    static get(key) {
        return localStorage.getItem(prefix(key));
    }

    static saveEntries(entries) {
        Storage.save('last-entries', JSON.stringify(entries));
        //console.log('json:', JSON.stringify(entries));

    }

    static getEntries() {
        const json = JSON.parse(Storage.get('last-entries'));
        if(!json) return;

        let entries = {};
        Object.entries(json).forEach( ([id, entry]) => entries[id] = Entry.fromJSON(entry));
        return entries;
    }

    static saveUsers(users) {
        Storage.save('last-users', JSON.stringify(users));
    }

    static getUsers() {
        const json = JSON.parse(Storage.get('last-users'));
        if(!json) return;

        let users = {};
        Object.entries(json).forEach( ([id, user]) => users[id] = User.fromJSON(user));
        return users;
    }
}

function prefix(key) {
    return PREFIX + ':' + key;
}
