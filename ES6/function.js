// Simple Function      
function add1(num1, num2) {
    return num1 + num2;
}
// Simple function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
};
// Function Expression with anonymous
const add3 = function(num1, num2) {
    return num1 + num2;
};
// Arrow Function with multi parameter and simple expression
const add4 = (num1, num2) => num1 + num2;
// Arrow Function with single parameter and simple expression
const add5 = num => num + 10;
// Arrow Function with single parameter and multiple expression
const add6 = num => {
    let num2 = 30;
    return num + num2;
};

// Arrow Function with multi parameter and multiple expression
const add6 = (num1, num2) => {
    let num3 = 30;
    return num1 + num2 + num3;
};




console.log(add1(10, 10));
console.log(add2(10, 10));
console.log(add3(10, 10));
console.log(add4(10, 10));
console.log(add5(10));
console.log(add6(10, 40));