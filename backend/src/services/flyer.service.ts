import { AppError } from '../errors/app-error.js'

import { FlyerRepository } from '../repositories/flyer.repository.js'

export class FlyerService {
    private repository =
        new FlyerRepository()

    async create(data: any) {
        return this.repository.create(data)
    }

    async findAll() {
        return this.repository.findAll()
    }

    async findById(id: string) {
        const flyer =
            await this.repository.findById(id)

        if (!flyer) {
            throw new AppError(
                'Flyer not found',
                404,
            )
        }

        return flyer
    }

    async delete(id: string) {
        await this.findById(id)

        await this.repository.delete(id)
    }
}