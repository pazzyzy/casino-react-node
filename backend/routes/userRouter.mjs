import { Router } from 'express'
import userController from '../controllers/userController.mjs'

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/', userController.getAll)

export default router
