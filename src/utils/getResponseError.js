import { RESPONSE_TEMPLATE } from './constants.js'

export const getResponseError = ({ code = 500, message }) => {
  return {
    ...RESPONSE_TEMPLATE,
    success: false,
    message: message,
    error: true,
    code: code,
  }
}
