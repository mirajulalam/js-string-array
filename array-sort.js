const numbers = [7, 4, 6, 9, 2, 1, 3, 8, 5];
// const sortedNumber = numbers.sort();
// console.log(sortedNumber);

const friend = ['dabul', 'babul', 'cabul', 'abul'];
// const sortedFriend = friend.sort();
// const reversedFriend = friend.reverse();
// console.log(reversedFriend);
const sortReversedFriend = friend.sort().reverse();
// console.log(sortReversedFriend);

// number sorting fun
const bigNumber = [54, 63, 12, 64, 25, 75, 43, 100, 32];
const sortedBigNumber = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumber);

