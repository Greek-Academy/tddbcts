import {InvalidArgumentError} from '../../domain';
import {factorial} from '../factorial';

describe('factorial', () => {
  it('should calculate correct results', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(15)).toEqual(1307674368000);
  });

  it('should cause InvalidArgumentErrors', () => {
    [0, 15.1, 3.1, -1].forEach(value => {
      expect(() => {
        factorial(value);
      }).toThrowError(InvalidArgumentError);
    });
  });
});
