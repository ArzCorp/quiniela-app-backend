import { getHomeController } from '../controllers/home.controller.js'
import { ROUTES } from '../utils/constants.js'

import { Router } from 'express'

export const homeRouter = Router()

homeRouter.get(ROUTES.HOME, getHomeController)
