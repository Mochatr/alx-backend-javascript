const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with data when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.include({ data: 'Successful response from the API' });
            done();
        }).catch((error) => done(error));
    });
});