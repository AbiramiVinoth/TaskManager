const taskService = require('../../api/tasks/tasks.service');
const userService = require('../../api/users/users.service');

const getTasks = function (req, res) {
    taskService.getTasks(req).then(function (tasks) {
        console.log('tasks', tasks)
        res.render('tasks', {
            title: 'Tasks',
            tasks
        });
    }).catch(function (error) {
        res.status(500).send('unable to render');
    })
}
 

const addTask = function (req, res) {
    userService.getUsers(req).then(function(users) {
        res.render('addTask', {
            title: 'Add Task',
            users
        })
    }).catch(function(error) {
        res.status(500).send('Unable to render');
    })
}

const editTask = function (req, res) {
    res.render('addTask');
}

module.exports = {
    getTasks,
    addTask,
    editTask
}