import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware";

import { ShoppingListController } from "../controllers/shopping-list.controller";

const shoppingRoutes = Router();

const controller = new ShoppingListController();

/**
 * @swagger
 * /shopping-lists:
 *   post:
 *     summary: Create shopping list
 *     tags: [Shopping]
 */
shoppingRoutes.post("/shopping-lists", authMiddleware, (req, res) =>
  controller.create(req, res),
);

/**
 * @swagger
 * /shopping-lists:
 *   get:
 *     summary: List shopping lists
 *     tags: [Shopping]
 */
shoppingRoutes.get("/shopping-lists", authMiddleware, (req, res) =>
  controller.findByUser(req, res),
);

export { shoppingRoutes };
