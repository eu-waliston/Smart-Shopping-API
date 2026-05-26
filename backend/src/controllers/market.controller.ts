import { Request, Response } from "express";

import { createMarketSchema } from "../schemas/market.schema";

import { MarketService } from "../services/market.service";

export class MarketController {
  private service = new MarketService();

  async create(req: Request, res: Response) {
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
}
