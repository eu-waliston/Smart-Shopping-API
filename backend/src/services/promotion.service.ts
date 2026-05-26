import { PromotionRepository } from "../repositories/promotion.repository";

export class PromotionService {
  private repository = new PromotionRepository();

  async create(data: any) {
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findByCategory(category: string) {
    return this.repository.findByCategory(category);
  }
}
