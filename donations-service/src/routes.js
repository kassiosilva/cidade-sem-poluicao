import express from 'express'
import cors from 'cors'

import { authenticate } from './middlewares/auth.js'

import { createDonor } from './controllers/donor.js'
import { createDonation } from './controllers/donation.js'

export const routes = express.Router()

routes.use(cors())

// Verifica se usuário está autenticado
routes.use(authenticate)

routes.post('/register-donor', createDonor)
routes.post('/register-donation', createDonation)
