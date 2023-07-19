import { db } from '../../db.js'
import {
  ERROR_MESSAGES,
  QUERYS,
  RESPONSE_TEMPLATE,
  STATUS_CODES,
  SUCCESS_MESSAGES,
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

export const deleteSoccerLeague = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }
    const { params } = req
    const { id } = params

    const [responseDelete] = await db.query(QUERYS.DELETE_SOCCER_LEAGUE, [id])

    if (responseDelete.affectedRows <= 0)
      throw new Error(`${ERROR_MESSAGES.DELETE_SOCCER_LEAGUE}`)

    response.code = STATUS_CODES.RESOURCE_CREATED
    response.message = `Liga de futbol con id: ${id} ${SUCCESS_MESSAGES.DELETE}`
    res.status(response.code).json(response)
  } catch (error) {
    const response = getResponseError({ message: error.message })
    res.status(response.code).json(response)
  }
}

export const updateSoccerLeague = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }
    const { params, body } = req
    const { id } = params
    const { name, logoImage } = body

    const [queryResponse] = await db.query(QUERYS.UPDATE_SOCCER_LEAGUE, [
      id,
      name,
      logoImage,
    ])

    if (queryResponse.affectedRows <= 0)
      throw new Error(ERROR_MESSAGES.UPDATE_SOCCER_LEAGUE)

    response.code = STATUS_CODES.RESOURCE_CREATED
    response.message = `Liga de futbol con id: ${id} ${SUCCESS_MESSAGES.UPDATE}`
    res.status(response.code).json(response)
  } catch (error) {
    const response = getResponseError({ message: error.message })
    res.status(response.code).json(response)
  }
}

export const createSoccerLeague = async (req, res) => {
  try {
    const response = { ...RESPONSE_TEMPLATE }
    const { body } = req
    const { name, logoImage } = body

    const [queryResponse] = await db.query(QUERYS.CREATE_SOCCER_LEAGUE, [
      name,
      logoImage,
    ])

    if (queryResponse.affectedRows <= 0)
      throw new Error(ERROR_MESSAGES.CREATE_SOCCER_LEAGUE)

    response.code = STATUS_CODES.RESOURCE_CREATED
    response.message = `Liga de futbol ${SUCCESS_MESSAGES.CREATE}`
    res.status(response.code).json(response)
  } catch (error) {
    const response = getResponseError({ message: error.message })
    res.status(response.code).json(response)
  }
}
