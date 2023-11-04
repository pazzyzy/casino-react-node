import { User } from '../models/models.mjs'
import ApiError from '../error/ApiError.mjs'

class UserController {
  async registration(req, res, next) {
    try {
      const { login, password, balance } = req.body
      const user = await User.create({ login, password, balance })
      // if (!user) {
      //   return next(ApiError.internal('Пользователь с таким именем существует'))
      // }
      return res.json(user)
    } catch (e) {
      // next(ApiError.badRequest(e.message))
      next(ApiError.internal('Пользователь с таким именем существует'))
    }
  }

  async login(req, res, next) {
    try {
      const { login, password } = req.body
      const user = await User.findOne({ where: { login } })
      if (!user) {
        return next(ApiError.internal('Пользователь не найден'))
      }
      if (password === user.password) {
        return res.json(user)
      } else {
        next(ApiError.internal('Неверный пароль'))
      }
    } catch (e) {
      next(ApiError.badxxRequest(e.message))
    }
  }

  async getAll(req, res, next) {
    const allUsers = await User.findAll()
    return res.json(allUsers)
  }
}

export default new UserController()
