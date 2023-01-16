import express from 'express'
import { livrosRouter } from './livrosRoutes.js'
import { autoresRouter } from './autoresRoutes.js'

export const routes = (app) => {
  app.route('/').get((request, response) => {
    response.status(200).send({ titulo: 'Curso de Node JS' })
  })

  app.use(express.json(), livrosRouter, autoresRouter)
}
