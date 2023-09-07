import {fizzBuzz} from './usagecases';

const main = () => {
  console.log('----FizzBuzz');
  for (let i = 0; i <=16; i++) {
    console.log(`    FizzBuzz(${i}) = ${fizzBuzz(i)}`);
  }
};

main();