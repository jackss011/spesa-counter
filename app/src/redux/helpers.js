import { makeRandomColor, RANDOM_COLORS} from 'model/utils'


export function getUserIds(users) {
    return Object.keys(users);
}

export function existUserId(users, id) {
    return getUserIds(users).includes(id);
}



// SHAREs

export function calculateShares(users, entries) {
    // {user1_id: toPay, user2_id: toPay}
    let shares = {};

    // initialize shares to 0
    Object.entries(users).forEach(([id,]) => shares[id] = 0.0);

    // sum each entry
    Object.entries(entries)
        .forEach(([id, entry]) => entry.calculate(shares));

    return shares;
}

export function calculateTotalFromShares(shares) {
    if(!shares) return 0;

    return Object.entries(shares).reduce( (acc, [id, share]) => acc + share, 0);
}




// DELETE USER

export function deleteAllEntriesWithId(entries, id) {

    Object.entries(entries).forEach( ([aid, entry]) => {
        if(entry.hasId(id)) {
            delete entries[aid];
        }
    });

    return entries;
}

export function hasUserEntries(userId, entries) {
    return Object.entries(entries).reduce(
        (acc, [id, entry]) => entry.hasId(userId) ?  acc + 1 : acc
        , 0);
}





// COLORs

export function getUserColorById(users, id) {
    if(!id) return;

    return users[id].color;
}


export function isUserColorUnique(users, color) {
    return !Object.entries(users)
        .reduce( (acc, [id, user]) => acc || user.color === color, false );
}


export function getUniqueUserColor(users) {
    for(let i = 0; i < RANDOM_COLORS.length; i++) {
        const color = makeRandomColor();

        if(isUserColorUnique(users, color))
            return color;
    }

    return makeRandomColor();
}
