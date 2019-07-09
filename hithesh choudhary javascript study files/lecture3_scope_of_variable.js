//variables are declared by two keywords
//let and var
//there are two types local and global variable
//var is for global variable
//let keyword scope is locally
//if we declare variable as var then its scope is globally

var variable1 = 'global variable 1';
let variable2 = 'local variable 1';
console.log(variable1);
console.log(variable2);
if (true)
{
    var variable3 = 'global inside local';
    let variable4 = 'local inside local';
    variable1 = 'global becomes local';
    variable2 = 'local becomes local';
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
    console.log(variable4);
}
console.log(variable1);
console.log(variable2);
console.log(variable3);

// console.log(variable4);  

//This line will not be executed because it is local variable
//its scope is inside that if block only
//because it is defined by let keyword
//similarly variable3 is also declared inside if block but
//as it is declared by var keyword so it becomes global variable