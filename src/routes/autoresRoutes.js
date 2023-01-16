import express from 'express'
import { AutorController } from '../controllers/autoresController.js'

export const autoresRouter = express.Router()

autoresRouter
  .get('/autores', AutorController.listarAutores)
  .get('/autores/:id', AutorController.listarAutorId)
  .post('/autores', AutorController.cadastrarAutor)
  .put('/autores/:id', AutorController.atualizarAutor)
  .delete('/autores/:id', AutorController.excluirAutor)
