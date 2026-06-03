import { Router } from 'express'
import multer from 'multer'

import { uploadConfig } from '../config/multer.js'

import { authMiddleware } from '../middlewares/auth.middleware.js'

import { UploadController } from '../controllers/upload.controller.js'

const uploadRoutes = Router()

const uploadController = new UploadController()

const upload = multer(uploadConfig)

uploadRoutes.post(
    '/upload',
    authMiddleware,
    upload.single('file'),
    (req,res) => uploadController.upload(req,res)
)

export { uploadRoutes }
