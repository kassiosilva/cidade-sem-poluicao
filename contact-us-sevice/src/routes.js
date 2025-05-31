import express from 'express'
import cors from 'cors'

import { authenticate } from './middlewares/auth.js'

import { createContact } from './controllers/contact.js'

export const routes = express.Router()

routes.use(cors())

// Verifica se usuário está autenticado
routes.use(authenticate)

routes.post('/contact-us', createContact)
