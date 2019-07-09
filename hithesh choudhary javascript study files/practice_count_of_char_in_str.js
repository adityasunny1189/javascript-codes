//count of no of character in the given string
//returning the count in object form 

//declaring a string
var string1 = 'Aditya';

//declaring an empty object
var result = {};

//running for loop for whole string
for(var i=0; i<string1.length; i++)
{
    //containg the character in a variable
    //converting the string in lower case
    var char1 = string1[i].toLowerCase();                                   // n assignment

    //testing the if condition if that character is there in the object
    //if the character is present than increase its count 
    if(result[char1] > 0)                                               // n test
    {
        result[char1]++;    //increasing its count                   //time complexity = O(n)  due to for loop
    }                                                               //where n is string length

    //else add that character in the object with count as 1
    else
    {
        result[char1] = 1;
    }
}

//printing the object
console.log(result);
