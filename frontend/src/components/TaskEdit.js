import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateTask, getTaskById } from '../api/taskApi'

const TaskEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetchTask()
  }, [])

  const fetchTask = async () => {
    try {
      const task = await getTaskById(id)
      setTitle(task.title)
      setDescription(task.description)
    } catch (error) {
      console.error('Error fetching task:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateTask(id, { title, description })
      navigate('/')
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default TaskEdit
