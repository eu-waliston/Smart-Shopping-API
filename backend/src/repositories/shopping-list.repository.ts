import { prisma } from "../prisma/client";

interface CreateListDTO {
  title: string;
  userId: string;
}

export class ShoppingListRepository {
  async create(data: CreateListDTO) {
    return prisma.shoppingList.crate({
      data,
    });
  }

  async findByUser(userId: string) {
    return prisma.shoppingList.findMany({
      where: {
        userId,
      },

      include: {
        items: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
