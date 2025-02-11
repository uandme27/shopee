import mongoose from 'mongoose'

const countConnect = (): void => {
  const connections = mongoose.connections.length
  console.log(`Number of connections: ${connections}`)
}

export { countConnect }
