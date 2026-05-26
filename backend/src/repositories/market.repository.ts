import { prisma } from "../prisma/client";

export class MarketRepository {
  async create(data: any) {
    return prisma.market.create({
      data,
    });
  }

  async findAll() {
    return prisma.market.findMany({
      include: {
        promotions: true,
      },
    });
  }

  async findNearBy() {
    return prisma.market.findMany({
      include: {
        promotions: true,
      },
    });
  }
}
