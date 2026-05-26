import { prisma } from "../prisma/client";

export class PromotionRepository {
  async create(data: any) {
    return prisma.promotion.create({
      data,
    });
  }

  async findAll() {
    return prisma.promotion.findMany({
      include: {
        markert: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findByCategory(category: string) {
    return prisma.promotion.findMany({
      where: {
        category,
      },
      include: {
        markert: true,
      },
    });
  }
}
