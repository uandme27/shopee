import bcrypt from 'bcrypt'
import shopModel, { ShopType } from './../models/shop.model'
import _ from 'lodash'
import { BadRequestError } from '~/core/error.response'

const RoleShop = {
  SHOP: 'SHOP',
  EDITOR: 'EDITOR',
  WRITTER: 'WRITTER',
  ADMIN: 'ADMIN'
}

class ShopService {
  static signUp = async ({ name, email, password }: ShopType) => {
    const hasUser = await shopModel.findOne({ email }).lean()
    if (hasUser) throw new BadRequestError('Email already exists')
    const hashPassword = bcrypt.hash(password, 10)
    const newUser = await shopModel.create({ name, email, password: hashPassword, roles: [RoleShop.SHOP] })
    if (newUser) {
      return {
        code: 201,
        metadata: _.pick(newUser, ['_id', 'name', 'email'])
      }
    }
    return {
      code: 200,
      metadata: null
    }
  }
}

export default ShopService
