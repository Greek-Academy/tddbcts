import { fizzBuzz } from '../fizzBuzz';
describe('fizzBuzz', () => {
  it('3の時にFizzを返す', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
})