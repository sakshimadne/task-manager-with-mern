import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/tasks'

export const getAllTasks = async () => {
  const response = await axios.get(BASE_URL)
  return response.data
}

export const createTask = async (task) => {
  const response = await axios.post(BASE_URL, task)
  return response.data
}

export const updateTask = async (taskId, updatedTask) => {
  const response = await axios.put(`${BASE_URL}/${taskId}`, updatedTask)
  return response.data
}

export const deleteTask = async (taskId) => {
  await axios.delete(`${BASE_URL}/${taskId}`)
}

export const getTaskById = async (taskId) => {
  const response = await axios.get(`${BASE_URL}/${taskId}`)
  return response.data
}
