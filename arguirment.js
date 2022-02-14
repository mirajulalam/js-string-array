// function addNumber() {
//     let result = 0;
//     for (const num of arguments) {
//         result = result + num;
//     }
//     return result;
// };
// const myNumber = addNumber(21, 21, 8);
// console.log(myNumber)

function getFullName() {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
};
const myFriend = getFullName('My', 'name', 'is', 'Mirajul', 'alam');
console.log(myFriend);
