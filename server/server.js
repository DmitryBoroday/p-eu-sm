import express from 'express'

const app = express()

app.get('/api/notes', (req, res) => {
  res.send(' response test 30')
})

app.listen(5001, () => {
  console.log('Server runs on port: 5001')
})
