import { autoresSchema } from '../models/AutoresSchema'

export class AutorController {
  static listarAutores = (_request, response) => {
    autoresSchema.find((_error, autores) => {
      response.status(200).json(autores)
    })
  }

  static listarAutorId = (request, response) => {
    const id = request.params.id
    autoresSchema.findById(id, (error, autoresSchema) => {
      if (error) {
        response.status(400).send({
          message: ` ${error.message} Autor inválido, por favor tente novamente.`
        })
      } else {
        response.status(200).send(autoresSchema)
      }
    })
  }

  static cadastrarAutor = (request, response) => {
    const autor = new autoresSchema(request.body)
    autor.save((error) => {
      if (error) {
        response
          .status(500)
          .send({ message: `Falha ao cadastrar o autor. ${error.message}` })
      } else {
        response.status(201).send(autor.toJSON())
      }
    })
  }

  static atualizarAutor = (request, response) => {
    const id = request.params.id
    autoresSchema.findByIdAndUpdate(id, { $set: request.body }, (error) => {
      if (!error) {
        response.status(200).send({ message: 'Autor atualizado com sucesso!' })
      } else {
        response.status(500).send({ message: error.message })
      }
    })
  }

  static excluirAutor = (request, response) => {
    const id = request.params.id
    autoresSchema.findByIdAndDelete(id, (error) => {
      if (!error) {
        response.status(200).send({ message: 'Autor removido com sucesso.' })
      } else {
        response.status(500).send({ message: error.message })
      }
    })
  }
}
