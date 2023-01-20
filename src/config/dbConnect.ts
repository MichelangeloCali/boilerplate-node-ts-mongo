import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://michelangelocali:12345@cluster0.eauetap.mongodb.net/alura-node')

export const db = mongoose.connection
