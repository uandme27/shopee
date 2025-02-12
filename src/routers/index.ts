import { Router } from 'express'
import shopRouter from './shop'

const router = Router()

router.use('/v1/api', shopRouter)

export default router
