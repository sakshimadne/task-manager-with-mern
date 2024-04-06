import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskEdit from './components/TaskEdit'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Task Manager</h1>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskEdit />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
