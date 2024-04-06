const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;