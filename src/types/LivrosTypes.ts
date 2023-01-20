import { Autores } from './AutoresTypes'

export interface Livros {
  id: string
  titulo: string
  autor: Autores
  editora: string
  numeroPaginas?: number
}
