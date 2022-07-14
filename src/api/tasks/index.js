const controller = require('./tasks.controller');
const express = require('express');
const router = express.Router();

router.get('/:id', controller.getTaskById);
router.get("/", controller.getTasks);
router.post("/", controller.saveTask);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.deleteTask)

module.exports = router;