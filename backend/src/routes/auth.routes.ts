import { Router } from "express";

import { AuthController } from "../controllers/auth.controller";

const authRoutes = Router();

const authController = new AuthController();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 */
authRoutes.post("/login", (req, res) => authController.login(req, res));

export { authRoutes };
