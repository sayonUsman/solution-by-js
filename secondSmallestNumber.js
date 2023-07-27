const secondSmallestNumber = (numbers) => {
  numbers.sort(function (a, b) {
    return b - a;
  });

  return numbers[1];
};

console.log(secondSmallestNumber([1, 11, 4, 15, 3, 9, 6, 8, 13]));
