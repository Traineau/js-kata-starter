import { fizzBuzz } from ".";

describe("Test of fizzBuzz", () => {
  it("Should return 'n' for n=4", () => {
    const n = 4;
    expect(fizzBuzz(n)).toEqual('4');
  });
  it("Should return n for n=11", () => {
    const n = 11;
    expect(fizzBuzz(n)).toEqual('11');
  })
  it("Should return Fizz for n=3", () => {
    const n = 3;
    expect(fizzBuzz(n)).toEqual('Fizz');
  })
  it("Should return Fizz for n=6", () => {
    const n = 6;
    expect(fizzBuzz(n)).toEqual('Fizz');
  })
  it("Should return Buzz for n=5", () => {
    const n = 5;
    expect(fizzBuzz(n)).toEqual('Buzz');
  })
  it("Should return Buzz for n=10", () => {
    const n = 10;
    expect(fizzBuzz(n)).toEqual('Buzz');
  })
  it("Should return FizzBuzz for n=15", () => {
    const n = 15;
    expect(fizzBuzz(n)).toEqual('FizzBuzz');
  })
  it("Should return FizzBuzz for n=30", () => {
    const n = 30;
    expect(fizzBuzz(n)).toEqual('FizzBuzz');
  })
});
