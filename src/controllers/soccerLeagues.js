import { db } from '../../db.js'
import {
  ERROR_MESSAGES,
  QUERYS,
  RESPONSE_TEMPLATE,
} from '../utils/constants.js'
import { getResponseError } from '../utils/getResponseError.js'

export const getAllSoccerLeagues = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }

    const [[soccerLeagues]] = await db.query(QUERYS.GET_ALL_SOCCER_LEAGUES)

    if (soccerLeagues.length <= 0)
      throw new Error(ERROR_MESSAGES.GET_SOCCER_LEAGUES)

    response.data = soccerLeagues
    response.results = soccerLeagues.length
    res.status(response.code).json(response)
  } catch (error) {
    const response = getResponseError({ message: error.message })
    res.status(response.code).json(response)
  }
}

export const getSoccerLeague = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }
    const { params } = req
    const { id } = params

    const [[soccerLeague]] = await db.query(QUERYS.GET_SOCCER_LEAGUE, [id])

    if (soccerLeague.length <= 0)
      throw new Error(ERROR_MESSAGES.GET_SOCCER_LEAGUES)

    response.data = soccerLeague
    response.results = soccerLeague.length
    res.status(response.code).json(response)
  } catch (error) {
    const response = getResponseError({ message: error.message })
    res.status(response.code).json(response)
  }
}

export const deleteSoccerLeague = (req, res) => {}

export const updateSoccerLeague = (req, res) => {}

export const createSoccerLeague = (req, res) => {}
