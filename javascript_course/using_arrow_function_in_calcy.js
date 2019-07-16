var num1 = 45;
var num2 = 23;

const addition = (a,b) => `${a + b}`;
const substraction = (a,b) => `${a - b}`;
const multiply = (a,b) => `${a * b}`;
const div = (a,b) => `${a / b}`;

add_result = addition(num1,num2);
sub_result = substraction(num1,num2)
mul_result = multiply(num1,num2);
div_result = div(num1, num2);

console.log(add_result);
console.log(sub_result);
console.log(mul_result);
console.log(div_result);