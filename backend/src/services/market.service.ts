import { MarketRepository } from "../repositories/market.repository";

export class MarketService {
  private repository = new MarketRepository();

  async create(data: any) {
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }
}
