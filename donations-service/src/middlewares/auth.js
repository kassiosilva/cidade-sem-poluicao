import jwt from 'jsonwebtoken'

export async function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Autenticação requerida. Token não fornecido.' })
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)

    req.user = { id: decodedToken.userId }

    next()
  } catch (error) {
    let message = 'Token inválido.'

    if (error.name === 'TokenExpiredError') {
      message = 'Token expirado. Por favor, faça login novamente.'
    } else if (error.name === 'JsonWebTokenError') {
      message = 'Token malformado ou assinatura inválida.'
    }

    return res.status(401).json({ message })
  }
}
