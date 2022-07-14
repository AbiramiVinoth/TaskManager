const controller = require('./tasks.controller');
const express = require('express');
const router = express.Router();

router.get('/add', controller.addTask);
router.get('/edit', controller.editTask);
router.get('/', controller.getTasks);

module.exports = router;