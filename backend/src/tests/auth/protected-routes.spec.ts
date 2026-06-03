
import request from 'supertest'
import app from '../../app'

describe('Protected routes', () => {
  const routes = ['/users','/shopping-lists','/markets','/promotions','/flyers']
  it.each(routes)('should block %s without token', async (route) => {
    const res = await request(app).get(route)
    expect(res.status).toBe(401)
  })
})
