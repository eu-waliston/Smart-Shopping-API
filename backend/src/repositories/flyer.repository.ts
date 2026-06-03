import { prisma } from '../prisma/client'

interface CreateFlyerDTO {
    title: string
    description?: string
    imageUrl: string
    marketId: string
    startDate?: Date
    endDate?: Date
}

export class FlyerRepository {
    async create(data: CreateFlyerDTO) {
        return prisma.flyer.create({
            data,
            include: {
                market: true,
            },
        })
    }

    async findAll() {
        return prisma.flyer.findMany({
            include: {
                market: true,
            },

            orderBy: {
                createdAt: 'desc',
            },
        })
    }

    async findById(id: string) {
        return prisma.flyer.findUnique({
            where: {
                id,
            },

            include: {
                market: true,
            },
        })
    }

    async delete(id: string) {
        return prisma.flyer.delete({
            where: {
                id,
            },
        })
    }
}