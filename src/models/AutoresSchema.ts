import mongoose from 'mongoose'

const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String, required: true },
  },
  {
    versionKey: false,
  },
)

export const autoresSchema = mongoose.model('autores', autorSchema)
