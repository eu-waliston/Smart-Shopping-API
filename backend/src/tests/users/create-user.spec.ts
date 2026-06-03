
import request from 'supertest'
import app from '../../app'

describe('Users', () => {
  it('should create user', async () => {
    const res = await request(app).post('/users').send({
      name:'Tester',
      email:`${Date.now()}@mail.com`,
      password:'123456'
    })
    expect([200,201]).toContain(res.status)
  })
})
