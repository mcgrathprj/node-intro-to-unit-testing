// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz if num is divisible by 3, fuzz if num is divisble by 5, fizz-buzz if the number entered is divisible by 15, otherwise return num', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 30, expected: fizz-buzz},
      {num: 6, expected: fizz},
      {num: 25, expected: buzz},
      {num: 29, expected: 29}
    ];
    // for each input (num), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // inputs if num is not a number
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0], input[1], input[2]);
      }).to.throw(Error);
    });
  });
});