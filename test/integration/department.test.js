const request = require('supertest')


let server

describe('API/departments', () => {
 beforeEach(() => {
    console.log('test1')
   server = require('../../index')
})

  afterEach(() => {server.close()})
  describe('GET/', () => {
it('should return all departments',  async() => {

const res = await request(server).get('/api/departments')
expect(res.status).toBe(200)

  })
 })
})