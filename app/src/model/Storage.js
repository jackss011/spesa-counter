
const PREFIX="spesa-counter"

export class Storage {
    static save(key, value) {
        localStorage.setItem(prefix(key), value);
    }

    static get(key) {
        localStorage.getItem(prefix(key));
    }
}


function prefix(key) {
    return PREFIX + ':' + key;
}
