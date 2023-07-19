import { Router } from 'express'
import { ROUTES } from '../utils/constants.js'
import {
  createSoccerLeague,
  deleteSoccerLeague,
  getAllSoccerLeagues,
  getSoccerLeague,
  updateSoccerLeague,
} from '../controllers/soccerLeagues.js'

export const soccerLeaguesRouter = Router()

soccerLeaguesRouter.get(ROUTES.GET_SOCCER_LEAGUES, getAllSoccerLeagues)

soccerLeaguesRouter.get(ROUTES.GET_SOCCER_LEAGUE, getSoccerLeague)

soccerLeaguesRouter.delete(ROUTES.DELETE_SOCCER_LEAGUE, deleteSoccerLeague)

soccerLeaguesRouter.put(ROUTES.UPDATE_SOCCER_LEAGUE, updateSoccerLeague)

soccerLeaguesRouter.post(ROUTES.CREATE_SOCCER_LEAGUE, createSoccerLeague)
