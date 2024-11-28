import express from 'express'
import cors from 'cors'
import { createDonor } from './controllers/donor.js'

export const routes = express.Router()

routes.use(cors())

routes.post('/register-donor', createDonor)
routes.post('/contact-us')
