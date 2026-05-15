import type { NextFunction, Request, Response } from "express";

import { loginSchema } from "../schemas/user.schema";
import { AuthService } from "../services/auth.service";

export class AuthController {
  private authService = new AuthService();

  async login(req: Request, res: Response) {
    const body = loginSchema.parse(req.body);

    const result = await this.authService.login(body);

    return res.json({
      status: "success",
      data: result,
    });
  }
}
