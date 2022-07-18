const userService = require('../../api/users/users.service');

const getUsers = function (req, res) {
    // const stdObj = {
    //     name: 'Arun',
    //     age: 26
    // }

    // const nameArr = ['Abi', 'Vinoth', 'Krish']; 
    // const stdArr = [
    //     {
    //         name: 'Abi',
    //         mailId: 'Abisubu14@gmail.com'
    //     },
    //     {
    //         name: 'Srimathi',
    //         mailId: 'msrimathi@gmail.com'
    //     }
    // ]
    userService.getUsers(req).then(function (users) {
        // console.log('users', user)
        res.render('users', {
            title: 'Users',
            users
            // name: 'Arun',
            // stdObj,
            // nameArr,
            // author: true,

        });
    }).catch(function (error) {
        res.status(500).send('unable to render');
    })

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