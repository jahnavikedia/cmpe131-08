const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
let server;

chai.use(chaiHttp);

describe('Simple Web App Tests', () => {
  // Start server before tests
  before(done => {
    server = app.listen(3001, done);
  });

  // Stop server after tests
  after(done => {
  if (server && server.listening) {
    server.close(done);
  } else {
    done();
  }
});


  it('should return 200', done => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should contain "Welcome"', done => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.include('Welcome');
        done();
      });
  });
});
