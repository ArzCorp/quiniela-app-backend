import { Router } from 'express'
import { ROUTES } from '../utils/constants.js'
import { registerController } from '../controllers/register.controller.js'

export const registerRouter = Router()

registerRouter.post(ROUTES.REGISTER, registerController)
