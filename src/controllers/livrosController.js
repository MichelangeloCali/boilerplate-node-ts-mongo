import { livrosSchema } from '../models/LivrosSchema.js'

export class LivroController {
  static listarLivros = (_request, response) => {
    livrosSchema
      .find()
      .populate('autor')
      .exec((_error, livros) => {
        response.status(200).json(livros)
      })
  }

  static listarLivroId = (request, response) => {
    const id = request.params.id
    livrosSchema
      .findById(id)
      .populate('autor', 'nome') //o segundo parâmetro filtra o retorno esperado.
      .exec((error, livrosSchema) => {
        if (error) {
          response.status(400).send({
            message: ` ${error.message} Livro inválido, por favor tente novamente.`
          })
        } else {
          response.status(200).send(livrosSchema)
        }
      })
  }

  static listarLivroEditora = (request, response) => {
    try {
      const editora = request.query.editora
      livrosSchema.find({ editora: editora }, {}, (_error, livrosSchema) => {
        response.status(200).send(livrosSchema)
      })
    } catch (error) {
      response.status(500).send({ message: 'Internal server error' })
    }
  }

  static cadastrarLivro = (request, response) => {
    const livro = new livrosSchema(request.body)
    livro.save((error) => {
      if (error) {
        response
          .status(500)
          .send({ message: `Falha ao cadastrar o livro. ${error.message}` })
      } else {
        response.status(201).send(livro.toJSON())
      }
    })
  }

  static atualizarLivro = (request, response) => {
    const id = request.params.id
    livrosSchema.findByIdAndUpdate(id, { $set: request.body }, (error) => {
      if (!error) {
        response.status(200).send({ message: 'Livro atualizado com sucesso!' })
      } else {
        response.status(500).send({ message: error.message })
      }
    })
  }

  static excluirLivro = (request, response) => {
    const id = request.params.id
    livrosSchema.findByIdAndDelete(id, (error) => {
      if (!error) {
        response.status(200).send({ message: 'Livro removido com sucesso.' })
      } else {
        response.status(500).send({ message: error.message })
      }
    })
  }
}
