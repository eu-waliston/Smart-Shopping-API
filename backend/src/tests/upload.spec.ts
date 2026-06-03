import request from "supertest";

import app from "../app";

import { authenticateUser } from "./auth.helper.js";


it('should upload file', async () => {
  const token = await authenticateUser()

  const response = await request(app)
    .post('/upload')
    .set(
      'Authorization',
      `Bearer ${token}`,
    )
    .attach('file', 'src/tests/files/test.jpg')

  expect(response.status).toBe(201)

  expect(response.body.data).toHaveProperty(
    'url',
  )
})