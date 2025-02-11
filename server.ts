import dotenv from 'dotenv'
import app from './src/app'

dotenv.config()

const port = 3055

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed')
  })
})
