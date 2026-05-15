import express from "express";
import type { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { createUserSchema } from "../schemas/user.schema";

export class UserController {
  private userService = new UserService();

  async create(req: Request, res: Response) {
    const body = createUserSchema.parse(req.body);

    const user = await this.userService.create(body);

    return res.status(201).json({
      status: "success",
      data: user,
    });
  }

  async findAll(req: Request, res: Response) {
    const users = await this.userService.findAll();

    return res.json({
      status: "success",
      data: users,
    });
  }
}
