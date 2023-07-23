// const user = {
//     userName: "Abhishek gour",
//     age: 21,

//     welcomeMessage: function () {
//         console.log(`${this.userName} welcome to vote`);
//     }
// }
// console.log(user.welcomeMessage());

// function one() {
//     const userName =  "Abhishek gour";
//     console.log(this.userName);
// }

// one();  o/p undefined


// const one = function () {
//     const userName =  "Abhishek gour";
//     console.log(this.userName);
// }

// one(); o/p undefined


// const one = () => {
//     const userName = "Abhishek gour";

//     console.log(this.userName);
// }

// one(); o/p undefined

// const one = (num1 = 10 , num2 = 20) => {
//     return num1 + num2;
// }

// console.log(one()); o/p 30


// const one = (num1 = 10, num2 = 20) => (num1 + num2);

// console.log(one());


// const cameras = {
//     price: 600,
//     brand: "nova",
//     myDes: function() {
//         return `This nova camera is of ${this.price}`;
//     }
// }
// console.log(cameras.myDes()) o/p This nova camera is of 600

// const cameras = {
//     price: 600,
//     brand: "nova",
//     myDes: () => {
//         return `This nova camera is of ${this.price}`;
//     }
// }

// console.log(cameras.myDes()) o/p This nova camera is of undefined


const x = {
    name: "Abhishek gour",
    role: 'Programmer',
    show: function () {
            console.log(`my name is ${this.name}`);
    }
}

console.log(x.show());