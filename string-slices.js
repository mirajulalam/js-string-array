const anthem = 'amar sonar bangla ami tomai valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 10);
console.log(smallSlice);

// substring
const anotherPart = anthem.substring(18, 21);
// console.log(anotherPart);

// concut
const first = 'Amader';
const second = 'City';
// const fullName = first + second;
const fullString = first.concat(second).concat('Dhaka').concat('Bangladesh');
// console.log(fullString);

// join
const words2 = ['a', 'b', 'c', 'd'];
// const allJoin = words2.join('');
// const allJoin = words2.join(' ');
// const allJoin = words2.join(',');
// const allJoin = words2.join(', ');
const allJoin = words2.join('www');
console.log(allJoin);