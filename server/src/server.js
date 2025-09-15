import express from 'express'
import notesRoutes from '../src/routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'
import cors from 'cors'
import path from 'path'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

const __dirname = path.resolve()

// middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(cors())
}

app.use(express.json()) // this middleware will parse the json bodies: req.nody
app.use(rateLimiter)

app.use('/api/notes', notesRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'))
  })
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server runs on port:', PORT)
  })
})
