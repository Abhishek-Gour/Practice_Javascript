// filter in JavaScript

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const codeValues = coding.forEach((item) => {
//     console.log(item);
//    return item
// })

// console.log(codeValues);

// const num = [1,2,3,4,5,6,7,8,9,10];


// const numValues = num.filter((item) => item > 5)

// console.log(numValues);

// const num1 = [];

// num.forEach((item) => {
//     if(item > 5) {
//         num1.push(item);
//     }
// })

// console.log(num1);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const num2 = num.filter( function (item) {
//     return item > 5;
// });
// console.log(num2);

// ******************************

// Map in JavaScript

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numValues = num.map((item) => item + 10);

// console.log(numValues);

// const numValues = num.map((item) => item * 10).map((value) => value + 1).filter((value) => value > 10);

// console.log(numValues);
// **********************************


// reduce in JavaScript

const num = [1, 2, 3, 4, 5];


// const numValues = num.reduce((acc, curValue) => { 
//     console.log(`acc: ${acc} and curValue: ${curValue}`);
//     return acc + curValue; }, 0)
// console.log(numValues); o/p 15

// const numValues = num.reduce((acc, curValue) => acc + curValue, 0);
// console.log(numValues); o/p 15


