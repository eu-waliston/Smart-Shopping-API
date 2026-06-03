
import request from 'supertest'
import app from '../../app'

describe('Shopping', () => {
  it('should require auth', async () => {
    const res = await request(app).get('/shopping-lists')
    expect(res.status).toBe(401)
  })
})
