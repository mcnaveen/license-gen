const generateLicenseKey = require('./index');

describe('license-gen', () => {
  describe('with default pairs', () => {
    it('should generate a unique license key of 32 characters', () => {
      const resultA = generateLicenseKey(32);
      expect(resultA).toMatch(/^([A-Z0-9]{4}-){7}[A-Z0-9]{4}$/);

      const resultB = generateLicenseKey(32);
      expect(resultA).toMatch(/^([A-Z0-9]{4}-){7}[A-Z0-9]{4}$/);

      expect(resultA).not.toEqual(resultB);
    });

    it('should not generate a unique license key as given length is 0', () => {
      const result = generateLicenseKey(0);
      expect(result).toEqual('');
    });

    it('should not generate a unique license key as given length is -1', () => {
      const result = generateLicenseKey(-1);
      expect(result).toEqual('');
    });
  });

  describe('with bespoke pairs', () => {
    it('should generate a unique license key of 10 characters', () => {
      const resultA = generateLicenseKey(10, 5);
      expect(resultA).toMatch(/^([A-Z0-9]{5}-)[A-Z0-9]{5}$/);

      const resultB = generateLicenseKey(10, 5);
      expect(resultB).toMatch(/^([A-Z0-9]{5}-)[A-Z0-9]{5}$/);

      expect(resultA).not.toEqual(resultB);
    });

    it('should generate a unique license key of 10 characters each separated individually', () => {
      const resultA = generateLicenseKey(10, 1);
      expect(resultA).toMatch(/^([A-Z0-9]-){9}[A-Z0-9]$/);

      const resultB = generateLicenseKey(10, 1);
      expect(resultB).toMatch(/^([A-Z0-9]-){9}[A-Z0-9]$/);

      expect(resultA).not.toEqual(resultB);
    });

    it('should not generate a unique license key as pairs is negative', () => {
      const result = generateLicenseKey(10, -1);
      expect(result).toMatch('');
    });
  });
});
