export const fizzBuzz = (n: number) : string => {
  let result = ''

  if (isMultiple(3, n)) result += 'Fizz';
  if (isMultiple(5, n)) result += 'Buzz'

  if (result) {
    return result;
  }

  return n.toString();
}

const isMultiple = (divider: number, n: number) : boolean => {
  return n % divider == 0
}