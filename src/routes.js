import express from 'express'
import cors from 'cors'

import { authenticate } from './middlewares/auth.js'

import { login } from './controllers/login.js'
import { register } from './controllers/register.js'
import { createDonor } from './controllers/donor.js'
import { createContact } from './controllers/contact.js'
import { createDonation } from './controllers/donation.js'

export const routes = express.Router()

routes.use(cors())

// Autenticação
routes.post('/register', register)
routes.post('/login', login)

// Verifica se usuário está autenticado
routes.use(authenticate)

routes.post('/register-donor', createDonor)
routes.post('/contact-us', createContact)
routes.post('/register-donation', createDonation)
