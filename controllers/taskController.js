const Task = require('../models/taskModel')

// createTask

const createTask = async (req, res) => {
  try {
    const task = new Task(req.body)
    await task.save()
    res.status(201).json(task)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// getTasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// getTask by id

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// updateTask
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// deleteTask
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
}
