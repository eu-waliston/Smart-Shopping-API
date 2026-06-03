import { Router } from 'express'

import { authMiddleware }
from '../middlewares/auth.middleware'

import { FlyerController }
from '../controllers/flyer.controller'

const flyerRoutes = Router()

const flyerController =
  new FlyerController()

/**
 * @swagger
 * /flyers:
 *   post:
 *     summary: Create flyer
 *     tags: [Flyers]
 */
flyerRoutes.post(
  '/flyers',
  authMiddleware,
  (req, res) =>
    flyerController.create(req, res),
)

/**
 * @swagger
 * /flyers:
 *   get:
 *     summary: List flyers
 *     tags: [Flyers]
 */
flyerRoutes.get(
  '/flyers',
  authMiddleware,
  (req, res) =>
    flyerController.findAll(req, res),
)

/**
 * @swagger
 * /flyers/{id}:
 *   get:
 *     summary: Get flyer by id
 *     tags: [Flyers]
 */
flyerRoutes.get(
  '/flyers/:id',
  authMiddleware,
  (req, res) =>
    flyerController.findById(req, res),
)

/**
 * @swagger
 * /flyers/{id}:
 *   delete:
 *     summary: Delete flyer
 *     tags: [Flyers]
 */
flyerRoutes.delete(
  '/flyers/:id',
  authMiddleware,
  (req, res) =>
    flyerController.delete(req, res),
)

export { flyerRoutes }