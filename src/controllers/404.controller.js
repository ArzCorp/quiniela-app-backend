import path from 'path'
import { PATHS } from '../utils/constants.js'

export const notFoundController = (req, res) =>
  res.sendFile(path.resolve(PATHS[404]))
