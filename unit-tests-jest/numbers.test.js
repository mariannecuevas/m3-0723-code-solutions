import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns an array of even numbers', () => {
    const input = [1, 4, 5, 10, 0];
    const result = evenNumbers(input);
    expect(result).toEqual([4, 10, 0]);
  });

  it('should handle an empty array', () => {
    const input = [];
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const amount = 5;
    const result = toDollars(amount);
    expect(result).toBe('$5.00');
  });

  it('should format a fractional number as dollars and cents', () => {
    const amount = 10.421;
    const result = toDollars(amount);
    expect(result).toBe('$10.42');
  });
});

describe('divideBy', () => {
  it('returns an array of numbers where each element is divided by the divisor', () => {
    const input = [4, 8, 12];
    const divisor = 2;
    const result = divideBy(input, divisor);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should handle division by zero', () => {
    const input = [1, 2, 3];
    const divisor = 0;
    const result = divideBy(input, divisor);
    expect(result).toEqual(null);
  });
});

describe('multiplyBy', () => {
  it('returns an object with values multiplied by the multiplier', () => {
    const input = { a: 2, b: 3, c: 4 };
    const multiplier = 5;
    const result = multiplyBy(input, multiplier);
    expect(result).toEqual({ a: 10, b: 15, c: 20 });
  });

   it('should handle multiplication by 0 in the object', () => {
     const input = { a: 1, b: 5, c: 6 };
     const multiplier = 0;
     const result = multiplyBy(input, multiplier);
     expect(result).toEqual({ a: 0, b: 0, c: 0 });
   });
});
