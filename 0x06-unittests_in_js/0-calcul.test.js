const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { it } = require('node:test');

describe('calculateNumber', () => {
    // Edge case 1: a is an integer, b is an integer.
    it('should return 4', () => {
        const result = calculateNumber(1, 3);
        assert.strictEqual(result, 4);
    });

    // Edge case 2: a is an integer, b is a float.
    it('should return 5', () => {
        const result = calculateNumber(1, 3.7);
        assert.strictEqual(result, 5);
    });

    // Edge case 3: a is a float, b is a float.
    it('should return 5', () => {
        const result = calculateNumber(1.2, 3.7);
        assert.strictEqual(result, 5);
    });

    // Edge case 4: a is a float, b is a float.
    it ('should return 6', () => {
        const result = calculateNumber(1.5, 3.7);
        assert.strictEqual(result, 6);
    });

    // Additional edge cases
    it ('should return 0', () => {
        const result = calculateNumber(0.1, 0.2);
        assert.strictEqual(result, 0);
    });

    // Handling negative numbers
    it ('should return negative numbers correctly', () => {
        const result = calculateNumber(-1.6, -2.6);
        assert.strictEqual(result, -5);
    });

    // Handling negative and positive numbers
    it ('should return 3', () => {
        const result = calculateNumber(-3.4, 5.6);
        assert.strictEqual(result, 3);
    });

    // Handling negative and positive numbers
    it ('should return -2', () => {
        const result = calculateNumber(1.5, -3.7);
        assert.strictEqual(result, -2);
    });
});