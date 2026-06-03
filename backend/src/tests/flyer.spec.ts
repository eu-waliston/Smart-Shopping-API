import request from 'supertest'

import app from '../../app'

import { authenticateUser } from '../services/auth.service.js'

describe('Flyers', () => {
  async function createMarket(token: string) {
    const response = await request(app)
      .post('/markets')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Condor',
        city: 'Curitiba',
        address: 'Rua XV de Novembro',
      })

    return response.body.data
  }

  describe('POST /flyers', () => {
    it('should create a flyer', async () => {
      const token = await authenticateUser()

      const market = await createMarket(token)

      const response = await request(app)
        .post('/flyers')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Encarte da Semana',
          description: 'Ofertas especiais',
          imageUrl: '/uploads/encarte.jpg',
          marketId: market.id,
        })

      expect(response.status).toBe(201)

      expect(response.body.data).toHaveProperty(
        'id',
      )

      expect(response.body.data.title).toBe(
        'Encarte da Semana',
      )
    })

    it('should validate required fields', async () => {
      const token = await authenticateUser()

      const response = await request(app)
        .post('/flyers')
        .set('Authorization', `Bearer ${token}`)
        .send({})

      expect(response.status).toBe(400)
    })

    it('should not create flyer without token', async () => {
      const response = await request(app)
        .post('/flyers')
        .send({
          title: 'Encarte',
        })

      expect(response.status).toBe(401)
    })
  })

  describe('GET /flyers', () => {
    it('should list flyers', async () => {
      const token = await authenticateUser()

      const response = await request(app)
        .get('/flyers')
        .set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(200)

      expect(
        Array.isArray(response.body.data),
      ).toBe(true)
    })

    it('should block unauthenticated access', async () => {
      const response = await request(app)
        .get('/flyers')

      expect(response.status).toBe(401)
    })
  })

  describe('GET /flyers/:id', () => {
    it('should get flyer by id', async () => {
      const token = await authenticateUser()

      const market = await createMarket(token)

      const flyerResponse = await request(app)
        .post('/flyers')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Encarte Muffato',
          imageUrl: '/uploads/muffato.jpg',
          marketId: market.id,
        })

      const flyerId =
        flyerResponse.body.data.id

      const response = await request(app)
        .get(`/flyers/${flyerId}`)
        .set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(200)

      expect(response.body.data.id).toBe(
        flyerId,
      )
    })

    it('should return 404 when flyer does not exist', async () => {
      const token = await authenticateUser()

      const response = await request(app)
        .get(
          '/flyers/00000000-0000-0000-0000-000000000000',
        )
        .set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(404)
    })

    it('should block access without token', async () => {
      const response = await request(app)
        .get(
          '/flyers/00000000-0000-0000-0000-000000000000',
        )

      expect(response.status).toBe(401)
    })
  })

  describe('DELETE /flyers/:id', () => {
    it('should delete flyer', async () => {
      const token = await authenticateUser()

      const market = await createMarket(token)

      const flyerResponse = await request(app)
        .post('/flyers')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Flyer para remover',
          imageUrl: '/uploads/remove.jpg',
          marketId: market.id,
        })

      const flyerId =
        flyerResponse.body.data.id

      const response = await request(app)
        .delete(`/flyers/${flyerId}`)
        .set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(204)
    })

    it('should return 404 when deleting nonexistent flyer', async () => {
      const token = await authenticateUser()

      const response = await request(app)
        .delete(
          '/flyers/00000000-0000-0000-0000-000000000000',
        )
        .set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(404)
    })

    it('should block delete without token', async () => {
      const response = await request(app)
        .delete(
          '/flyers/00000000-0000-0000-0000-000000000000',
        )

      expect(response.status).toBe(401)
    })
  })
})