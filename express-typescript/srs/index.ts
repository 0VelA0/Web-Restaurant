import express from 'express'
import UserRouter from './routes/users'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!! ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/users', UserRouter)

app.listen(PORT, () => {
  console.log('Server is running on port', { PORT })
})
