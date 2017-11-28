
export function getUserIds(users) {
    return Object.keys(users);
}

export function existUserId(users, id) {
    return getUserIds(users).includes(id);
}
