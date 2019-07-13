//                                                |-------|
//                                                | Array |
//                                                |-------|
//New Datatype === Array in this lecture
//usually we use const keyword for declaring array

//declaring an array by []

const marvel_Heros = ['Iron Man','SpiderMan','Capt. America'];

//not only string we can also store a bunch of diffrent datatypes in Js arrays

//valid js array

console.log(typeof(marvel_Heros));

const Test_array = ['aditya', 100, true, null];

//accesing an array

console.log(marvel_Heros);

//accesing each element by index no
//index start at position 0

console.log(marvel_Heros[0]);

//Iron Man will be printed
//because Iron Man is at index 0

//accesing the last element of the array

console.log(marvel_Heros[marvel_Heros.length - 1]);

//the last element is always the length of array - 1

//during printing we can also run a js code in string 
//with the help of `` and js code is written within ${}

console.log(`we have ${marvel_Heros.length} Super Heros`);