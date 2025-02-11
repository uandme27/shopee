import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

// init middlewares-------------------------------------------------------------
app.use(morgan('dev'))
app.use(compression())
app.use(helmet())

// init db----------------------------------------------------------------------
import './dbs/init.mongodb'

// convert json to object js
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app
