
import request from 'supertest'
import app from '../../app'

describe('Flyers',()=>{
  it('should block list without auth', async()=>{
    const res = await request(app).get('/flyers')
    expect(res.status).toBe(401)
  })
})
