import { Router } from 'express'
import shopController from '~/controllers/shop.controller'
import asyncHandler from '~/helpers/asyncHandler'

const router = Router()

router.post('/shop/signup', asyncHandler(shopController.signUp))

export default router
