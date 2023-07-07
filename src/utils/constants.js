const STATIC_PATH = './src/static'

export const BCRYPT_SALT_ROUND = 10

export const RESPONSE_TEMPLATE = Object.freeze({
  success: true,
  data: [],
  code: 200,
  error: false,
  message: '',
  results: 0,
})

export const ROUTES = Object.freeze({
  HOME: '/',
  LOG_IN: '/login',
  REGISTER: '/register',
})

export const PATHS = Object.freeze({
  HOME: `${STATIC_PATH}/home/index.html`,
  404: `${STATIC_PATH}/404/index.html`,
})

export const QUERYS = Object.freeze({
  LOG_IN: 'SELECT * FROM `users` WHERE `users`.`email` = ?',
  REGISTER: 'CALL `create_user`(?, ?, ?, ?, ?)',
})

export const ERROR_MESSAGES = Object.freeze({
  REGISTER_PASSWORDS: 'Las contraseñas no coinciden.',
  NOT_SAVED_DATABASE: 'No se insertó el registro en la base de datos.',
  LOG_IN: 'Los datos proporcionados son incorrectos.',
})

export const SUCCESS_MESSAGES = Object.freeze({
  REGISTER: 'Usuario creado con éxito.',
})

export const STATUS_CODES = Object.freeze({
  RESOURCE_CREATED: 201,
})
