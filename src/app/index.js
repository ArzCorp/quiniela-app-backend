import express from 'express'
import { homeRouter } from '../routes/home.routes.js'
import { notFoundController } from '../controllers/404.controller.js'

export const app = express()

app.use(homeRouter)
app.use(notFoundController)
