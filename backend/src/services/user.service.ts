import { UserRepository } from "../repositories/user.repository";
import { AppError } from "../errors/app-error";
import { hash } from "bcryptjs";

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export class UserService {
  private userRepository = new UserRepository();

  async create({ name, email, password }: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists", 409);
    }

    const hashedPassword = await hash(password, 10);
    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
  async findAll() {
    return this.userRepository.findAll();
  }
}
