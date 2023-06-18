import path from 'path'

export const notFoundController = (req, res) =>
  res.sendFile(path.resolve('./src/static/404/index.html'))
