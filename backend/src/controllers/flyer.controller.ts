import type { Request, Response } from 'express'

import { FlyerService } from '../services/flyer.service'

import { createFlyerSchema } from '../schemas/flyer.schema'

export class FlyerController {
    private service =
        new FlyerService()

    async create(req: Request, res: Response) {
        const body =
            createFlyerSchema.parse(req.body)

        const flyer =
            await this.service.create({
                ...body,

                startDate: body.startDate
                    ? new Date(body.startDate)
                    : undefined,

                endDate: body.endDate
                    ? new Date(body.endDate)
                    : undefined,
            })

        return res.status(201).json({
            status: 'success',
            data: flyer,
        })
    }

    async findAll(
        req: Request,
        res: Response,
    ) {
        const flyers =
            await this.service.findAll()

        return res.json({
            status: 'success',
            data: flyers,
        })
    }

    async findById(
        req: Request,
        res: Response,
    ) {
        const flyer =
            await this.service.findById(
                req.params.id,
            )

        return res.json({
            status: 'success',
            data: flyer,
        })
    }

    async delete(
        req: Request,
        res: Response,
    ) {
        await this.service.delete(
            req.params.id,
        )

        return res.status(204).send()
    }
}