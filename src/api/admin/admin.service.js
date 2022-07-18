const Admin = require('../../models/admin');

const getAdmins = function (req) {
    try {
        return Admin.find(req.query);
    } catch (e) {
        return e;
    }
}

const getAdminById = function (req) {
    try {
        return Admin.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

const saveAdmin = function (req) {
    try {
        var admin = new Admin(req.body);
        return admin.save();
    } catch (e) {
        return e;
    }
}

const updateAdmin = function (req) {
    try {
        return Admin.findByIdAndUpdate(req.params.id, req.body)
    } catch (e) {
        return e;
    }
}

const deleteAdmin = function (req) {
    try {
        return Admin.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAdmins,
    getAdminById,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}