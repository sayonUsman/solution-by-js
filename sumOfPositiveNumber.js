const sumOfPositiveNumber = (numbers) => {
  let sum = 0;

  numbers.forEach((number) => {
    if (number > 0) {
      sum += number;
    }
  });

  return sum;
};

console.log(sumOfPositiveNumber([2, -5, 10, -3, 7]));
