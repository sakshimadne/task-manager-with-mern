import React, { useEffect, useState } from 'react'
import { getAllTasks, deleteTask } from '../api/taskApi'
import { Link } from 'react-router-dom'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const data = await getAllTasks()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId)
      setTasks(tasks.filter((task) => task._id !== taskId))
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
            <Link to={`/edit/${task._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
