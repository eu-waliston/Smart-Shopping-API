import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware";

import { MarketController } from "../controllers/market.controller";

import { PromotionController } from "../controllers/promotion.controller";

import { asyncHandler } from "../utils/async-handler";

const marketRoutes = Router();

const marketController = new MarketController();

const promotionController = new PromotionController();

marketRoutes.post(
  "/markets",
  authMiddleware,
  asyncHandler(marketController.create.bind(marketController)),
);

marketRoutes.get(
  "/markets",
  authMiddleware,
  asyncHandler(marketController.findAll.bind(marketController)),
);

marketRoutes.post(
  "/promotions",
  authMiddleware,
  asyncHandler(promotionController.create.bind(promotionController)),
);

marketRoutes.get(
  "/promotions",
  authMiddleware,
  asyncHandler(promotionController.findAll.bind(promotionController)),
);

marketRoutes.get(
  "/promotions/category/:category",
  authMiddleware,
  asyncHandler(promotionController.findByCategory.bind(promotionController)),
);

export { marketRoutes };
