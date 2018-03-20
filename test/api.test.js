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

      it('should call the api', (done) => {
          chai.request(app)
          .get('/api?number=100')
          .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.eql('Your number is:100');
                    done();
                });
          })
    })
