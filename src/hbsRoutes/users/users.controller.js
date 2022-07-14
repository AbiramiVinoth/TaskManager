const getUsers = function (req, res) {
    res.render('users');
}

const addUser = function (req, res) {
    res.render('addUser');
}

const editUser = function (req, res) {
    res.render('addUser');
}

module.exports = {
    getUsers,
    addUser,
    editUser
}