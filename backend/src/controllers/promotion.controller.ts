import type { Request, Response } from "express";

import { createPromotionSchema } from "../schemas/market.schema";

import { PromotionService } from "../services/promotion.service";

export class PromotionController {
  private service = new PromotionService();

  async create(req: Request, res: Response) {
    const validation = createPromotionSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        status: "error",
        message: "Validation failed",
        issues: validation.error.format(),
      });
    }

    const promotion = await this.service.create(validation.data);

    return res.status(201).json({
      status: "success",
      data: promotion,
    });
  }

  async findAll(req: Request, res: Response) {
    const promotions = await this.service.findAll();

    return res.json({
      status: "success",
      data: promotions,
    });
  }

  async findByCategory(req: Request, res: Response) {
    const { category } = req.params;

    const promotions = await this.service.findByCategory(category);

    return res.json({
      status: "success",
      data: promotions,
    });
  }
}
