import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { AppError } from "../errors/app-error";

interface TokenPayload {
  sub: string;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    throw new AppError("Token missing", 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    };

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
