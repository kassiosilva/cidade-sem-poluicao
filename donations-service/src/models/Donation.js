import mongoose from 'mongoose'

const { Schema } = mongoose

const donationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  donation: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export const Donation = mongoose.model('donation', donationSchema)
