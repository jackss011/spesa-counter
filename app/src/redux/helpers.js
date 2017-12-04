
export function getUserIds(users) {
    return Object.keys(users);
}

export function existUserId(users, id) {
    return getUserIds(users).includes(id);
}

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


export function deleteAllEntriesWithId(entries, id) {

    Object.entries(entries).forEach( ([aid, entry]) => {
        if(entry.hasId(id)) {
            delete entries[aid];
        }
    });

    return entries;
}
