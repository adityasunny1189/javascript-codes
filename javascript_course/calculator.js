var num1 = 45;
var num2 = 22;

function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function mul(a, b) {
    return a*b;
}
function div(a, b) {
    return a/b;
}

add_result = add(num1, num2);
sub_result = subtract(num1, num2);
mul_result = mul(num1, num2);
div_result = div(num1, num2).toFixed(2);

console.log(add_result);
console.log(sub_result);
console.log(mul_result);
console.log(div_result);