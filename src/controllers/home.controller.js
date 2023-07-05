import path from 'path'
import { PATHS } from '../utils/constants.js'

export const getHomeController = (req, res) =>
  res.sendFile(path.resolve(PATHS.HOME))
