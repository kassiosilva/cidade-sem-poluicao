import { Donation } from '../models/Donation.js'

export async function createDonation(req, res) {
  try {
    const task = await Donation.create({ ...req.body })

    return res.status(201).json(task)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao criar contato' })
  }
}
