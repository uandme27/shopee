import { Request, Response } from 'express'
import { CREATED } from '~/core/success.response'
import ShopService from '~/services/shop.service'

class ShopController {
  signUp = async (req: Request, res: Response) => {
    new CREATED({
      message: 'Successfully signed up',
      metadata: await ShopService.signUp(req.body)
    }).send(res)
  }
}

export default new ShopController()
