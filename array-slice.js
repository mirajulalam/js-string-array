const numbers = [23, 34, 43, 53, 65, 43, 75, 85, 76, 32,];
// slice
const numberSlice = numbers.slice(4, 8);
// console.log(numberSlice);
// console.log(numbers);

// const numberSlice2 = numbers.splice(2, 3);
// console.log(numberSlice2);
// console.log(numbers)


const numberSlice3 = numbers.splice(2, 3, 111, 222, 333);
console.log(numberSlice3);
console.log(numbers)