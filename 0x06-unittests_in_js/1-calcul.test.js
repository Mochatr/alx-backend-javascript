const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 6 when inputs are ("SUM", 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are ("SUM", -0.4, 0.4)', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -4 when inputs are ("SUBTRACT", 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 2 when inputs are ("SUBTRACT", 5.1, 3.6)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.1, 3.6), 2);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 0.2 when inputs are ("DIVIDE", 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when inputs are ("DIVIDE", 1.4, 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Error" when inputs are ("DIVIDE", 1.4, 0.4)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error when the type is invalid', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
    });
  });
});