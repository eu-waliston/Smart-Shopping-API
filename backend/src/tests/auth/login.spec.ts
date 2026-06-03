
import request from 'supertest'
import app from '../../app'

describe('POST /login', () => {
  it('should reject invalid credentials', async () => {
    const res = await request(app).post('/login').send({
      email: 'fake@test.com',
      password: '123456'
    })
    expect(res.status).toBe(401)
  })
})
