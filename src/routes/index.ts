import express, { Request, Response } from 'express'
import { livrosRouter } from './livrosRoutes'
import { autoresRouter } from './autoresRoutes'

export const routes = (app: any) => {
  app.route('/').get((_request: Request, response: Response) => {
    response.status(200).send({ titulo: 'Curso de Node JS' })
  })

  app.use(express.json(), livrosRouter, autoresRouter)
}
