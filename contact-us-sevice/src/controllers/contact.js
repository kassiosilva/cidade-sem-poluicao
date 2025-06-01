import { Contact } from '../models/Contact.js'

export async function createContact(req, res) {
  try {
    const task = await Contact.create({ ...req.body, userId: req.user.id })

    return res.status(201).json(task)
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar contato', error })
  }
}
