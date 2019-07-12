//                                          Math Library

//floor and ceil function

var num1 = 22/7;

//printing value of num1 is very large float value with many num after decimal

console.log(num1);

//floor function rounds the value to lower num

console.log(Math.floor(num1));

//ceil function rounds the value up to upper num

console.log(Math.ceil(num1));

//                                      generating random numbers

//we use random function to generate random number
//range of num generated is between [0,1]

console.log(Math.random());

//to generate a random number for a given range 
//we have to apply our mathematical skills

var upper = 6;
var lower = 0;

//we have applied a equation to use the value of random num to generate 
//no in our specific range

var chance = Math.floor(Math.random() * (upper - lower) +1);

console.log(chance);
