
import request from 'supertest'
import app from '../../app'

describe('Promotions',()=>{
  it('should block list without auth', async()=>{
    const res = await request(app).get('/promotions')
    expect(res.status).toBe(401)
  })
})
