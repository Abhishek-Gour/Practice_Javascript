// function multiplyBy5(num) {
//     return num * 5;
// }

// multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


// function createUser(username, score) {
//     this.score = score;
//     this.username = username;
// }

// createUser.prototype.increment = function () {
//     score++;
// }
// createUser.prototype.printMe = function () {
//     console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = createUser("tea", 250)

// chai.printMe()


// let myName = "Abhishek gour    ";
// let myChannel = "Work   ";
// console.log(myName.trim().length);

let myHeros = ['thor' , 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}
const TASupport = {
    makeAssingment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}


