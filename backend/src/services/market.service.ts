import { MarketRepository } from "../repositories/market.repository";
import { calculateDistance } from "../utils/calculate-distance";

export class MarketService {
  private repository = new MarketRepository();

  async create(data: any) {
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findNearby(latitude: number, longitude: number) {
    const markets = await this.repository.findNearby();

    const nearbyMarkets = markets
      .map((market: any) => {
        if (!market.latitude || !market.longitude) {
          return null;
        }

        const distance = calculateDistance(
          latitude,
          longitude,
          market.latitude,
          market.longitude,
        );

        return {
          ...market,
          distance,
        };
      })

      .filter(Boolean)

      .sort((a: any, b: any) => a.distance - b.distance);

    return nearbyMarkets;
  }
}
