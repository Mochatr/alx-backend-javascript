// test cases 
const assert = require('assert'); 
const calculateNumber = require('./1-calcul.js'); 

describe('calculateNumber', () => { 
    describe('SUM', () => { 
	it('should return 6 when inputs are 1.4 and 4.5', () => { 
	    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6); 
	});

	it('should return 5 when inputs are 1.2 and 3.7', () => { 
	    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5); 
	}); 
    }); 
    
    describe('SUBTRACT', () => { 
	it('should return -4 when inputs are 1.4 and 4.5', () => { 
	    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4); 
	}); 
	
	it('should return 2 when inputs are 5.6 and 4.1', () => { 
	    assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 4.1), 2); 
	});
    });
    
    describe('DIVIDE', () => { 
	it('should return 0.2 when inputs are 1.4 and 4.5', () => { 
	    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2); 
	});
	
	it('should return Error when inputs are 1.4 and 0', () => { 
	    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error'); 
	}); 
	
	it('should return 2.5 when inputs are 4.6 and 2.1', () => { 
	    assert.strictEqual(calculateNumber('DIVIDE', 4.6, 2.1), 2.5); 
	}); 
    }); 
	
    describe('Invalid type', () => { 
        it('should thow an error for invalid type', () => {
	    assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid type/); 
	}); 
    }); 
});
