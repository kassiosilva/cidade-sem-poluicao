import express from 'express'
import cors from 'cors'
import { createDonor } from './controllers/donor.js'
import { createContact } from './controllers/contact.js'

export const routes = express.Router()

routes.use(cors())

routes.post('/register-donor', createDonor)
routes.post('/contact-us', createContact)
