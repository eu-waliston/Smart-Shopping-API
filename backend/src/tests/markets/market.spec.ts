
import request from 'supertest'
import app from '../../app'

describe('Markets',()=>{
  it('should block create without auth', async()=>{
    const res = await request(app).post('/markets').send({})
    expect(res.status).toBe(401)
  })
})
