const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 6 when inputs are ("SUM", 1.4, 4.5)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are ("SUM", -0.4, 0.4)', () => {
      expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -4 when inputs are ("SUBTRACT", 1.4, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 1 when inputs are ("SUBTRACT", 5.1, 3.6)', () => {
      expect(calculateNumber('SUBTRACT', 5.1, 3.6)).to.equal(1);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 0.2 when inputs are ("DIVIDE", 1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when inputs are ("DIVIDE", 1.4, 0)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when inputs are ("DIVIDE", 1.4, 0.4)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error when the type is invalid', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(Error);
    });
  });
});