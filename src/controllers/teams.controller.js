import { db } from '../../db.js'
import {
  ERROR_MESSAGES,
  QUERYS,
  RESPONSE_TEMPLATE,
  STATUS_CODES,
  SUCCESS_MESSAGES,
} from '../utils/constants.js'
import { getResponseError } from '../utils/getResponseError.js'

export const getAllTeams = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }
    const [[teams]] = await db.query(QUERYS.GET_TEAMS)

    if (teams.length <= 0) throw new Error(ERROR_MESSAGES.WITHOUT_TEAMS)

    response.data = teams
    response.results = teams.length
    res.status(response.code).json(response)
  } catch (error) {
    const response = getResponseError({ message: error.message })
    res.status(response.code).json(response)
  }
}

export const getTeam = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }
    const { params } = req
    const { id } = params

    const [[team]] = await db.query(QUERYS.GET_TEAM, [id])

    if (team.length <= 0) throw new Error(ERROR_MESSAGES.WITHOUT_TEAM)

    response.data = team
    response.results = team.length
    res.status(response.code).json(response)
  } catch (error) {
    console.log(error)
    const response = getResponseError({ message: error.message })
    res.status(response.code).json(response)
  }
}

export const deleteTeam = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }
    const { params } = req
    const { id } = params

    const [queryRes] = await db.query(QUERYS.DELETE_TEAM, [id])

    if (queryRes.affectedRows <= 0)
      throw new Error(ERROR_MESSAGES.TEAM_DELETE_ERROR)

    response.message = `Equipo id ${id} ${SUCCESS_MESSAGES.DELETE}`
    res.status(response.code).json(response)
  } catch (error) {
    const response = getResponseError({ message: error.message })
    res.status(response.code).json(response)
  }
}
