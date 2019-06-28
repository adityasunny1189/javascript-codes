//to find factorial of a number
var num2  = Number(prompt("enter a no: "));
function factorial(no2) {
  if (no2===0)
  {
    return 1;
  }
  else{
    return (no2*factorial(no2-1));
  }
}
alert(factorial(num2));
