import type { Request, Response, NextFunction } from "express";

import { createMarketSchema } from "../schemas/market.schema";

import { MarketService } from "../services/market.service";

export class MarketController {
  private service = new MarketService();

  async create(req: Request, res: Response, next: NextFunction) {
    const body = createMarketSchema.parse(req.body);

    const market = await this.service.create(body);

    return res.status(201).json({
      status: "success",
      data: market,
    });
  }

  async findAll(req: Request, res: Response) {
    const markets = await this.service.findAll();

    return res.status(200).json({
      status: "success",
      data: markets,
    });
  }

  async nearby(req: Request, res: Response) {
    const latitude = Number(req.query.latitude);
    const longitude = Number(req.query.longitude);

    const markets = await this.service.findNearby(latitude, longitude);

    return res.status(200).json({
      status: "success",
      data: markets,
    });
  }
}
