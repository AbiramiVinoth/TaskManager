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
    userService.getUsers(req).then(function (users) {
        res.render('addTask', {
            title: 'Add Task',
            users,
            btnName: 'Save'
        })
    }).catch(function (error) {
        res.status(500).send('Unable to render');
    })
}

const editTask = function (req, res) {
    userService.getUsers(req).then(function (users) {
        taskService.getTaskById(req).then(function (task) {
            res.render('addTask', {
                title: 'Edit Task',
                task,
                users,
                btnName: 'Update'
            });
        }).catch(function (error) {
            res.status(500).send('Unable to Update')
        })
    }).catch(function(error) {
        res.status(500).send('Unable to Update')
    })
}

module.exports = {
    getTasks,
    addTask,
    editTask
}