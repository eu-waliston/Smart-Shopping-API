import type { Request, Response } from 'express'

export class UploadController {
    async upload(req: Request, res: Response) {
        const file = req.file

        return res.status(201).json({
            status: 'success',

            data: {
                filename: file?.filename,
                originalname: file?.originalname,
                url: `/uploads/${file?.filename}`,
            }
        })
    }
}
