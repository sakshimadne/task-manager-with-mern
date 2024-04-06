import React, { useState } from 'react'
import { createTask } from '../api/taskApi'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createTask({ title, description })
      setTitle('')
      setDescription('')
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  return (
    <div>
      <h2>Create Task</h2>
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
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default TaskForm
