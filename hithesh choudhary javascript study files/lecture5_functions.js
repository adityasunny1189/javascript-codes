//                                             |----------|
//                                             | Function |
//                                             |----------|
// declaring and calling a function in js

//                                      Declaring function first way

//declaring function by function() keyword
let func1 = function() {
    console.log('Hello World');
    console.log('Welcome to Aditya js lecture');
}

//calling function

func1();

//                                      Declaring function by second way

function func2() {
    console.log('Declaring function second way');
}

func2();

//                                      passing parameter to the function

function func3(name) {
    console.log(`hello ${name} how are you`);
}

func3('aditya');

//                                      returning value from a function

function func4(num1, num2) {
    return (num1 + num2);
}

console.log(`the sum of 5 and 7 is ${func4(5, 7)}`);