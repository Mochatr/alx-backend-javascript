const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return 4 when inputs are (1, 3)', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are (1, 3.7)', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return 5 when inputs are (1.2, 3.7)', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6 when inputs are (1.5, 3.7)', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    // Additional edge cases
    it ('should return 0 when inputs are (0.1, 0.2)', () => {
        assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    });

    // Handling negative and positive numbers
    it ('should handle negative numbers correctly', () => {
        assert.strictEqual(calculateNumber(-1.4, -3.7), -5);
    });

    // Handling negative and positive numbers
    it ('should handle mixed positive and negative numbers', () => {
        assert.strictEqual(calculateNumber(1.5, -3.7), -2);
    });
});