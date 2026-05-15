import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

import { UserRepository } from "../repositories/user.repository";
import { AppError } from "../errors/app-error";

interface LoginDTO {
  email: string;
  password: string;
}

export class AuthService {
  private userRepository = new UserRepository();

  async login({ email, password }: LoginDTO) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const paswordMatch = await compare(password, user.password);

    if (!paswordMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign(
      {
        sub: user.id,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      },
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
