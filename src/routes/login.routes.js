import { Router } from 'express'
import { ROUTES } from '../utils/constants.js'
import { logInController } from '../controllers/logIn.controller.js'

export const LogInRouter = Router()

LogInRouter.post(ROUTES.LOG_IN, logInController)
