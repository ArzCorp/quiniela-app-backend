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
  GET_TEAMS: '/teams/get',
  GET_TEAM: '/teams/get/:id',
  DELETE_TEAM: '/teams/delete/:id',
  UPDATE_TEAM: '/teams/update/:id',
  CREATE_TEAM: '/teams/create/',
  GET_SOCCER_LEAGUES: '/soccer-leagues/get/all',
  GET_SOCCER_LEAGUE: '/soccer-league/get/:id',
  DELETE_SOCCER_LEAGUE: '/soccer-league/delete/:id',
  UPDATE_SOCCER_LEAGUE: '/soccer-league/update/:id',
  CREATE_SOCCER_LEAGUE: '/soccer-league/create',
})

export const PATHS = Object.freeze({
  HOME: `${STATIC_PATH}/home/index.html`,
  404: `${STATIC_PATH}/404/index.html`,
})

export const QUERYS = Object.freeze({
  LOG_IN: 'CALL `get_user_by_email`(?)',
  REGISTER: 'CALL `create_user`(?, ?, ?, ?, ?)',
  GET_USER_PASSWORD: 'CALL `get_user_password`(?)',
  GET_TEAMS: 'CALL `get_all_teams`()',
  GET_TEAM: 'CALL `get_team`(?)',
  DELETE_TEAM: 'CALL `delete_team`(?)',
  UPDATE_TEAM: 'CALL `update_team`(?, ?, ?)',
  CREATE_TEAM: 'CALL `create_team`(?, ?)',
  GET_ALL_SOCCER_LEAGUES: 'CALL `get_all_soccer_leagues`()',
  GET_SOCCER_LEAGUE: 'CALL `get_soccer_league`(?)',
  DELETE_SOCCER_LEAGUE: 'CALL `delete_soccer_league`(?)',
  UPDATE_SOCCER_LEAGUE: 'CALL `update_soccer_league`(?, ?, ?)',
  CREATE_SOCCER_LEAGUE: 'CALL `create_soccer_league`(?, ?)',
})

export const ERROR_MESSAGES = Object.freeze({
  REGISTER_PASSWORDS: 'Las contraseñas no coinciden.',
  NOT_SAVED_DATABASE: 'No se insertó el registro en la base de datos.',
  LOG_IN: 'Los datos proporcionados son incorrectos.',
  WITHOUT_TEAMS: 'No se encontraron equipos.',
  WITHOUT_TEAM: 'Equipo no existe, intenta de nuevo.',
  DELETE_TEAM: 'No se pudo eliminar el equipo, intente de nuevo.',
  UPDATE_TEAM: 'No se pudo actualizar el equipo, intente de nuevo.',
  CREATE_TEAM: 'No se pudo crear el equipo, intente más tarde.',
})

export const SUCCESS_MESSAGES = Object.freeze({
  REGISTER: 'Usuario creado con éxito.',
  DELETE: 'eliminado con éxito,',
  UPDATE: 'actualizado con éxito.',
  CREATE: 'creado con éxito.',
})

export const STATUS_CODES = Object.freeze({
  RESOURCE_CREATED: 201,
  NOT_CONTENT: 204,
})
