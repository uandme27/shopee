import { ShopType } from './models/shop.model'

declare global {
  namespace Express {
    interface Request {
      body: object
      params: string
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      DEV_DB_PORT: string
      DEV_DB_USER: string
      DEV_DB_PW: string
      DEV_DB_NAME: string
    }
  }
  interface Error {
    status: number
  }
}
