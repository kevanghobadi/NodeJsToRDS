const expect = require('expect')
const request = require('supertest')

const app = require('./../app.js')


describe('get /api', () => {
  it('should call the api', (done) => {
    request(app)
      .get('/api')
      .expect(200)
      .end(done)
      })
  })
