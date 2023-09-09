import { fizzBuzz } from '../fizzBuzz';
describe('fizzBuzz', () => {
  it('3の時fizzを返す', () => {
    expect(fizzBuzz(3)).toBe('fizz');
  });
  it('5の時buzzを返す', () => {
    expect(fizzBuzz(5)).toBe('buzz');
  });
  it('6の時fizzを返す', () => {
    expect(fizzBuzz(6)).toBe('fizz');
  });
  it('10の時buzzを返す', () => {
    expect(fizzBuzz(10)).toBe('buzz');
  });
  it('15の時fizzbuzzを返す', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
})