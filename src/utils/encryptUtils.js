import bcrypt from 'bcrypt'
import { BCRYPT_SALT_ROUND } from './constants.js'

export const encryptPassword = async (password) =>
  await bcrypt.hash(password, BCRYPT_SALT_ROUND)

export const comparePasswords = async (currentPassword, databasePassword) =>
  await bcrypt.compare(currentPassword, databasePassword)
