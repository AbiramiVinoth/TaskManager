const apiRoute = function(app) {
    app.use('/api/users', './api/users');
}

module.exports = {
    apiRoutes
}