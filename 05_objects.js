const mySum = Symbol('key1');

const jsUser = {
    name: 'Black Panther',
    age: 21,
    [mySum]: 'myKey1',
    location: 'MP',
    email: 'csabhishek03@gmail.com',
    isLoggedIn: false,
    LastLoginDays: ['monday', 'saturday']
}

// console.log(jsUser.name); 
// console.log(jsUser["name"]);
// symbol

// console.log(jsUser[mySum]); symbol

// console.log( typeof jsUser[mySum]); 

// console.log(jsUser)

// object lecture second
/*********************************** */

// const tinderUser = new Object();
// const tinderUser = {}
// tinderUser.id = "123abkz"
// tinderUser.name = 'Black'
// tinderUser.isLoggedIn = false
// console.log(tinderUser);

/* const regularUser = {
//     email: "xyz@gmail.com",
//     fullName: {
//         userFullName: {
//             firstName: "Black",
//             lastName: 'Panther'
//         }
//     }
/ }
console.log(regularUser.fullName.userFullName.firstName);