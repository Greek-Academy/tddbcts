import {InvalidArgumentError} from '../domain';

export const factorial = (n: number): number => {
  if (n < 1 || n > 15 || n % 1 !== 0) {
    throw new InvalidArgumentError('nは1以上15以下の整数値で与えてください');
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
