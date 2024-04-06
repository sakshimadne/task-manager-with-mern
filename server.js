const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db')
const taskRoutes = require('./routes/taskRoutes')
const cors = require('cors')
dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/tasks', taskRoutes)
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
