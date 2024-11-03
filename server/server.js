const express = require('express')
const mongoose = require('mongoose')
const cookiesParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require('./routes/auth/auth-routes')

// Data Base connection
mongoose
  .connect('mongodb+srv://Enamtoet:Enamtoet060@cluster0.u7wni.mongodb.net/')
  .then(() => {
    console.log('Mongoose Connected')
  })
  .catch((err) => {
    console.log(err)
  })
const app = express()
const PORT = process.env.PORT || 5000

// Allow CORS for specified frontend and HTTP methods
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      'Content-type',
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma',
    ],
    credentials: true,
  })
)

app.use(cookiesParser())
app.use(express.json())
app.use('/api/auth', authRouter)

app.listen(PORT, () => console.log(`http://localhost:${PORT}/ `))
