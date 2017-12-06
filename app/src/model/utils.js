

export function makeRandomId() {
    const ID_CHARS = "abcdefghilmnopqrstuvz";
    const ID_LENGTH = 24;
    let id = "";

    for(let i = 0; i < ID_LENGTH; i++) {
        let idIndex = getRandomInt(ID_CHARS.length - 1);
        id += ID_CHARS.charAt(idIndex);
    }

    return id;
}


export function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


/** mapper: function(id, value) returns object to map */
export function mapEntries(obj, mapper) {
    return Object.entries(obj).map(([id, value]) => mapper(id, value));
}


export function isObjectEmpty(obj) {
    return Object.entries(obj).length === 0;
}
