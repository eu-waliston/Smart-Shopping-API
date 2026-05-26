import { ShoppingListRepository } from "../repositories/shopping-list.repository";

export class ShoppingListService {
  private repository = new ShoppingListRepository();

  async create(title: string, userId: string) {
    return this.repository.create({
      title,
      userId,
    });
  }

  async findByUser(userId: string) {
    return this.repository.findByUser(userId);
  }
}
