let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();


const app = require('./../app.js')
chai.use(chaiHttp);


describe('get 200 from /api', () => {
  it('should call the api', (done) => {
      chai.request(app)
      .get('/api')
      .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      })

    // it('should call the api with a number parameter and see it in the response',
    //  (done) => {
    //   request(app)
    //     .get('/api?number=100')
    //     .expect(200)
    //     .expect(res).to.be.json
    //     .end(done)
    //     })
    })
