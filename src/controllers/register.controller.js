import { db } from '../../db.js'
import { encryptPassword } from '../utils/encryptUtils.js'
import { getResponseError } from '../utils/getResponseError.js'
import { RESPONSE_TEMPLATE } from '../utils/constants.js'
import {
  ERROR_MESSAGES,
  QUERYS,
  STATUS_CODES,
  SUCCESS_MESSAGES,
} from '../utils/constants.js'

export const registerController = async (req, res) => {
  try {
    const { body } = req
    const { email, name, lastname, mothersLastname, password1, password2 } =
      body
    const response = { ...RESPONSE_TEMPLATE }

    const isPasswordEqual = password1 === password2

    if (!isPasswordEqual) throw new Error(ERROR_MESSAGES.REGISTER_PASSWORDS)

    const password = await encryptPassword(password1)
    const [registerResponse] = await db.query(QUERYS.REGISTER, [
      name,
      lastname,
      mothersLastname,
      email,
      password,
    ])

    const isRegisterCreated = registerResponse.affectedRows >= 1

    if (!isRegisterCreated) throw new Error(ERRORS.NOT_SAVED_DATABASE)

    response.code = STATUS_CODES.RESOURCE_CREATED
    response.message = SUCCESS_MESSAGES.REGISTER

    res.status(response.code).json(response)
  } catch (error) {
    const response = getResponseError({ message: error.message })
    res.json(response)
  }
}
