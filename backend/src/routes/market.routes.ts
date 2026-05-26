import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware";

import { MarketController } from "../controllers/market.controller";

import { PromotionController } from "../controllers/promotion.controller";

const marketRoutes = Router();

const marketController = new MarketController();

const promotionController = new PromotionController();

marketRoutes.post("/markets", authMiddleware, (req, res) => {
  marketController.create(req, res);
});
marketRoutes.get("/markets", authMiddleware, (req, res) => {
  marketController.findAll(req, res);
});
marketRoutes.post("/promotions", authMiddleware, (req, res) => {
  promotionController.create(req, res);
});
marketRoutes.get("/promotions", authMiddleware, (req, res) => {
  promotionController.findAll(req, res);
});
marketRoutes.get(
  "/promotions/category/:category",
  authMiddleware,
  (req, res) => {
    promotionController.findByCategory(req, res);
  },
);

export { marketRoutes };
