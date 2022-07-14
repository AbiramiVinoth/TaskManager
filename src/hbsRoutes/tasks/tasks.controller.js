const getTasks = function (req, res) {
    res.render('tasks');
}

const addTask = function (req, res) {
    res.render('addTask');
}

const editTask = function (req, res) {
    res.render('addTask');
}

module.exports = {
    getTasks,
    addTask,
    editTask
}