import { prisma } from "../prisma/client";

interface CreateItemDTO {
  name: string;
  quantity: number;
  category?: string;
  listId: string;
}

export class ShoppingItemRepository {
  async create(data: CreateItemDTO) {
    return prisma.shoppingItem.create({
      data,
    });
  }

  async toggle(itemId: string, checked: boolean) {
    return prisma.shoppingItem.update({
      where: {
        id: itemId,
      },

      data: {
        checked,
      },
    });
  }

  async delete(itemId: string) {
    return prisma.shoppingItem.delete({
      where: {
        id: itemId,
      },
    });
  }
}
