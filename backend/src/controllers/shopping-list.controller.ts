import type { NextFunction, Request, Response } from "express";

import { createListSchema } from "../schemas/shopping.schema";

import { ShoppingListService } from "../services/shopping-list.service";

export class ShoppingListController {
  private service = new ShoppingListService();

  async create(req: Request, res: Response) {
    const body = createListSchema.parse(req.body);

    const list = await this.service.create(body.title, req.user.id);

    return res.status(201).json({
      status: "success",
      data: list,
    });
  }

  async findByUser(req: Request, res: Response) {
    const lists = await this.service.findByUser(req.user.id);

    return res.json({
      status: "success",
      data: lists,
    });
  }
}
