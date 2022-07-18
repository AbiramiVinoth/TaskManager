const service = require('./tasks.service');

const getTasks = function (req, res) {
    service.getTasks(req).then(function (tasks) {
        res.status(200).send(tasks);
    }).catch(function (e) {
        res.status(500).send('Internal Server Error');
    })
}

const getTaskById = function (req, res) {
    service.getTaskById(req).then(function (task) {
        res.status(200).send(task);
    }).catch(function (e) {
        res.status(500).send('Internal Server Error');
    })
}

const saveTask = function (req, res) {
    service.saveTask(req).then(function (task) {
        res.status(201).send('tasks saved Sucessfully');
    }).catch(function (e) {
        res.status(500).send('Internal Server Error');
    })
}

const updateTask = function (req, res) {
    service.updateTask(req).then(function (task) {
        res.status(201).send('tasks Updated Successfully');
    }).catch(function (e) {
        res.status(500).send('Internal Server Error');
    })
}

const deleteTask = function (req, res) {
    service.deleteTask(req).then(function (task) {
        res.status(200).send('tasks deleted Successfully');
    }).catch(function (e) {
        res.status(500).send('Internal Server Error');
    })

}

module.exports = {
    getTasks,
    getTaskById,
    saveTask,
    updateTask,
    deleteTask
}