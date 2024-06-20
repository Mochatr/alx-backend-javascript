const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
	it('should return 6 when inputs are 1.4 and 4.5', () => { 
	    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
	});

	it('should return 5 when inputs are 1.2 and 3.7', () => { 
	    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
	});
    });
    
    describe('SUBTRACT', () => {
	it('should return -4 when inputs are 1.4 and 4.5', () => { 
	    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
	});
	
	it('should return 2 when inputs are 5.6 and 4.1', () => {
	    expect(calculateNumber('SUBTRACT', 5.6, 4.1)).to.equal(2);
	});
    });
    
    describe('DIVIDE', () => {
	it('should return 0.2 when inputs are 1.4 and 4.5', () => {
	    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
	});
	
	it('should return Error when inputs are 1.4 and 0', () => {
	    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
	});
	
	it('should return 2.5 when inputs are 4.6 and 2.1', () => { 
	    expect(calculateNumber('DIVIDE', 4.6, 2.1)).to.equal(2.5);
	});
    });
	
    describe('Invalid type', () => {
        it('should thow an error for invalid type', () => {
	    expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid type');
	});
    });
});
