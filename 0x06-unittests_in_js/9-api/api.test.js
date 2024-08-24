const request = require('request');
const { expect } = require('chai');
const app = require('./api');

let server;

describe('API Tests', () => {
    before((done) => {
      // Start the server once before all tests
      server = app.listen(7865, () => {
        console.log('Server started for testing...');
        done();
      });
    });
  
    after((done) => {
      // Close the server once after all tests
      server.close(() => {
        console.log('Server closed after testing...');
        done();
      });
    });

    describe('Index page', () => {
        before((done) => {
            server = app.listen(7865, done);
        });

        after((done) => {
            server.close(done);
        });

        it('should return status code 200', (done) => {
            request.get('http://localhost:7865', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('should return the correct message', (done) => {
            request.get('http://localhost:7865', (error, response, body) => {
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
        });

        it('should have the correct content-type', (done) => {
            request.get('http://localhost:7865', (error, response, body) => {
                expect(response.headers['content-type']).to.contain('text/html');
                done();
            });
        });
    });

    describe('Cart page', () => {
        before((done) => {
            server = app.listen(7865, done);
        });

        after((done) => {
            server.close(done);
        });

        it('should return status code 200 when :id is a number', (done) => {
            request.get('http://localhost:7865/cart/12', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 12');
                done();
            });
        });

        it('should return status code 404 when :id is NOT a number', (done) => {
            request.get('http://localhost:7865/cart/hello', (error, response, body) => {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });
});