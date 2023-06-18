import path from 'path'

export const getHomeController = (req, res) => {
  res.sendFile(path.resolve('./src/static/home/index.html'))
}
