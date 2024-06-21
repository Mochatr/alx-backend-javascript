const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('index page', () => {
    before((done => {
        app.listen(7865, () => {
	    console.log('Test server runnningon port 7865');
	    done();
	});
    });

    it('should return status code 200', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
	    expect(response.statusCode).to.equal(200);
	    done();
        });
    });

    it('should return the correct message', (done) => {
	request.get('http://localhost:7865', (error, response, body) => {
            expecte(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
