import express from 'express'
import cors from 'cors'

import { login } from './controllers/login.js'
import { register } from './controllers/register.js'

export const routes = express.Router()

routes.use(cors())

routes.post('/register', register)
routes.post('/login', login)
