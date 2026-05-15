import { UserRepository } from "../repositories/user.repository";
import { AppError } from "../errors/app-error";

interface CreateUserDTO {
  name: string;
  email: string;
}

export class UserService {
  private userRepository = new UserRepository();

  async create({ name, email }: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists", 409);
    }

    const user = await this.userRepository.create({
      name,
      email,
    });

    return user;
  }
  async findAll() {
    return this.userRepository.findAll();
  }
}
