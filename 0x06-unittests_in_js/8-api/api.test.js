const request = require('request');
const { expect } = require('chai');
let server;

before((done) => {
    server = require('./api');
    server.on('listening', () => done());
});

after((done) => {
    server.close(done);
});


describe('index page', () => {
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
});
