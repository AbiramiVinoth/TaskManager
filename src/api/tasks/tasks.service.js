const Tasks = require('../../models/tasks');

const getTasks = function (req) {
    try {
        return Tasks.find(req.query);
    } catch (e) {
        return e;
    }
}

const getTaskById = function (req) {
    try {
        return Tasks.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

const saveTask = function (req) {
    try {
        var task = new Tasks(req.body);
        return task.save();
    } catch (e) {
        return e;
    }
}

const updateTask = function (req) {
    try {
        return Tasks.findByIdAndUpdate(req.params.id, req.body)
    } catch (e) {
        return e;
    }
}

const deleteTask = function (req) {
    try {
        return Tasks.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getTasks,
    getTaskById,
    saveTask,
    updateTask,
    deleteTask
}