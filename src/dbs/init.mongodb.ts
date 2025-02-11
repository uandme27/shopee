import mongoose from 'mongoose'
import { dev } from '~/config.mongodb'
import { countConnect } from '../helpers/check.connect'

const { user, pw, dbname } = dev['db']
const connectString = `mongodb+srv://${user}:${pw}@cluster0.ibyie.mongodb.net/${dbname}`
class Database {
  private static instance: Database | null = null
  private constructor() {
    this.connect()
  }
  connect(type: string = 'mongodb'): void {
    const isMongodb = type === 'mongodb'
    if (isMongodb) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }

    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .then((_) => {
        countConnect()
      })
      .catch((err) => console.log(`Error connect to database: ${err}`))
  }
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

export default Database.getInstance()
