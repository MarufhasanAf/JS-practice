var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var uniqueNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  if (uniqueNumbers.indexOf(numbers[i]) == -1) {
    uniqueNumbers.push(numbers[i]);
  }
}
console.log(uniqueNumbers);
