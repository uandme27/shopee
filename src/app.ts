import compression from 'compression'
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import router from './routers'

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

// init routes------------------------------------------------------------------
app.use('/', router)

// handling error---------------------------------------------------------------
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error.status || 500
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    message: error.message || 'Internal Server Error'
  })
})

export default app
