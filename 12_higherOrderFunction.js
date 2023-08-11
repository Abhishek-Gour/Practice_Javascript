function salary(num) {
    return num * .7;
}

setTimeout(salary, 300);

const mySalary = [50, 40, 60, 20];

mySalary.filter(salary > 40)
console.log(ans);

// () => {}
// (func) => {}
// (func) => async() => {}

const asyncHandler = (fn) => async(req,res,next) => {
    try {
        await fn(req,res,next)
    }catch(err) {

    }
}