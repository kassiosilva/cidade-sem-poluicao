import express from 'express'
import cors from 'cors'

export const routes = express.Router()

routes.use(cors())

routes.post('/register-donor')
routes.post('/contact-us')
