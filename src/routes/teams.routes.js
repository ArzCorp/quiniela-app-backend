import { Router } from 'express'
import { ROUTES } from '../utils/constants.js'
import {
  createTeam,
  deleteTeam,
  getAllTeams,
  getTeam,
  updateTeam,
} from '../controllers/teams.controller.js'

export const teamsRouter = Router()

teamsRouter.get(ROUTES.GET_TEAMS, getAllTeams)
teamsRouter.get(ROUTES.GET_TEAM, getTeam)
teamsRouter.delete(ROUTES.DELETE_TEAM, deleteTeam)
teamsRouter.put(ROUTES.UPDATE_TEAM, updateTeam)
teamsRouter.post(ROUTES.CREATE_TEAM, createTeam)
