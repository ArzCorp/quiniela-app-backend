import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || '5000'
export const DB_HOST = process.env.DB_HOST || '127.0.0.1'
export const DB_USER = process.env.DB_USER || 'arzcorp'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'Osva0807$'
export const DB_PORT = process.env.DB_PORT || '3306'
export const DB_NAME = process.env.DB_NAME || 'quiniela_app'
