export const fizzBuzz = (n: number): string => {
  let str = "";
  if(n % 3 == 0) str += "Fizz";
  if(n % 5 == 0) str += "Buzz";
  return str;
}