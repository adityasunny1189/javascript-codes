//Methords in array
//declaring an array

const array1 = ['one', 'two', 'three', 'four', 'five', 'six'];

//printing the current array

console.log(array1);

//                                      shift and unshift

//shift removes the first element of the array

var removed_element = array1.shift();

//printing the new array with no first element 

console.log(array1);

//we can also print the removed element

console.log(removed_element);

//similarly unshift adds an element at the first position

array1.unshift('zero');

//printing new updated array

console.log(array1);

//                                          push and pop

//like shift and unshift pop and push also removes and add element but from last

var removed_element2 = array1.pop();

//printing the new array

console.log(array1);

//push adds element at last position

array1.push('seven');

//printing the new updated array

console.log(array1);

//                                                 splice

//splice removes element from midddle wherever we want

//splice takes two or three argument

array1.splice(2, 2, 'Ten');

//it removes 2 elements starting from index two and adds the new string at its place

//printing new updated array

console.log(array1);