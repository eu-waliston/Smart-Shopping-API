import express from "express";
import type { Request, Response } from "express";

import { UserService } from "../services/user.service";

export class UserController {
  private userService = new UserService();

  async create(req: Request, res: Response) {
    try {
      const { name, email } = req.body;

      const user = await this.userService.create({
        name,
        email,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({
        error: (error as Error).message,
      });
    }
  }

  async findAll(req: Request, res: Response) {
    const users = await this.userService.findAll();

    return res.json(users);
  }
}
