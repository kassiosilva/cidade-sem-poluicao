import { Donor } from '../models/Donor.js'

export async function createDonor(req, res) {
  try {
    const task = await Donor.create({ ...req.body, userId: req.user.id })

    return res.status(201).json(task)
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar doador' })
  }
}
