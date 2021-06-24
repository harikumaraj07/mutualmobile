export const getUserDetailsFromId = (id, users) => {
    const user = users.filter(_user => _user.id === id);
    return user.length ? user[0] : {};
};
