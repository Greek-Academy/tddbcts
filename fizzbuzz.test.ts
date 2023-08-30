// import { FizzBuzz } from "./fizzbuzz.js";

const executer = require('./fizzbuzz');

test("3の倍数を受け取るとFizzを返す", () => {
    expect(executer(3)).toEqual("fizz");
});

// test('3の倍数ならfizz',() =>{
//     expect(new FizzBuzz().execute(3)).toBe("fizz");
// });