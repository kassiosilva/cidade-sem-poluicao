import express from 'express'

const server = express()

server.use(express.json())

server.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT} 🚀️`)
})
