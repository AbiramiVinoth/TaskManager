const controller = require('./users.controller');
 const express = require('express');
 const router = express.Router();
 
 router.get('/add', controller.addUser);
 router.get("/edit", controller.editUser);
 router.get("/", controller.getUsers);

 module.exports = router;