import express from 'express'
import notesRoutes from '../src/routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// middleware
app.use(cors())
app.use(express.json()) // this middleware will parse the json bodies: req.nody
app.use(rateLimiter)

app.use('/api/notes', notesRoutes)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server runs on port:', PORT)
  })
})
