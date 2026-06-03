import multer from 'multer'
import crypto from 'crypto'
import path from 'path'

export const uploadConfig = {
  storage: multer.diskStorage({
    destination: path.resolve(
      __dirname,
      '..',
      'uploads'
    ),

    filename(req, file, callback) {
      const hash = crypto
        .randomBytes(16)
        .toString('hex')

      const filename = `${hash}-${file.originalname}`

      callback(null, filename)
    }
  })
}