import { Donor } from '../models/Donor.js'

export async function createDonor(req, res) {
  try {
    const task = await Donor.create({ ...req.body })

    return res.status(201).json(task)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao criar doador' })
  }
}
