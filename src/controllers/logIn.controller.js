import { db } from '../../db.js'
import { comparePasswords } from '../utils/encryptUtils.js'
import { getResponseError } from '../utils/getResponseError.js'
import {
  ERROR_MESSAGES,
  QUERYS,
  RESPONSE_TEMPLATE,
} from '../utils/constants.js'

export const logInController = async (req, res) => {
  try {
    const { body } = req
    const { email, password: receivedPassword } = body
    const response = { ...RESPONSE_TEMPLATE }

    const [userResponse] = await db.query(QUERYS.LOG_IN, [email])

    if (userResponse.length <= 0) throw new Error(ERROR_MESSAGES.LOG_IN)
    const [user] = userResponse
    const { password: userPassword } = user

    const isPasswordEqual = await comparePasswords(
      receivedPassword,
      userPassword
    )

    if (!isPasswordEqual) throw new Error(ERROR_MESSAGES.LOG_IN)

    response.data = user
    response.results = userResponse.length

    res.status(response.code).json(response)
  } catch ({ message }) {
    const response = getResponseError({ message })

    res.status(response.code).json(response)
  }
}
