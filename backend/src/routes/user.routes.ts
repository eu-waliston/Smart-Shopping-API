import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRoutes = Router();

const userController = new UserController();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create user
 *     tags: [Users]
 */
userRoutes.post("/users", (req, res) => userController.create(req, res));

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List users
 *     tags: [Users]
 */
userRoutes.get("/users", (req, res) => userController.findAll(req, res));

export { userRoutes };
