import express, { json } from 'express'
import cors from 'cors'
import { homeRouter } from '../routes/home.routes.js'
import { notFoundController } from '../controllers/404.controller.js'
import { LogInRouter } from '../routes/login.routes.js'
import { registerRouter } from '../routes/register.routes.js'
import { teamsRouter } from '../routes/teams.routes.js'
import { soccerLeaguesRouter } from '../routes/soccerLeagues.routes.js'

export const app = express()

app.use(cors())
app.use(json())

app.use(homeRouter)
app.use(LogInRouter)
app.use(registerRouter)
app.use(teamsRouter)
app.use(soccerLeaguesRouter)

app.use(notFoundController)
