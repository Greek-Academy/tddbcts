import {factorial, fizzBuzz} from './usagecases';

const main = () => {
  console.log('----factorial');
  for (let i = 1; i <=15; i++) {
    console.log(`    factorial(${i}) = ${factorial(i)}`);
  }

  console.log('----FizzBuzz');
  for (let i = 0; i <=16; i++) {
    console.log(`    FizzBuzz(${i}) = ${fizzBuzz(i)}`);
  }
};

main();