export const fizzBuzz = (n: number): string => {
  // TODO: FizzBuzz問題をクリアするためのコードを書く
  if(n % 3 == 0) return "Fizz";
  else if(n % 5 == 0) return "Buzz";
  return '';
}