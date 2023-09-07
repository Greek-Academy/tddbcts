import { fizzBuzz } from '../fizzBuzz';
describe('fizzBuzz', () => {
  it('3の時にFizzを返す', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('5の時にBuzzを返す', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('6の時にFizzを返す', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
  });
  it('10の時にBuzzを返す', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });
  it('15の時にFizzBuzzを返す', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
})