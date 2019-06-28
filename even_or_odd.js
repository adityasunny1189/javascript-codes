//to check no is even or odd
var num = Number(prompt("enter a no: "));
function check_even_or_odd(no) {
  if (no===0)
  {
    return "no is zero";
  }
  else if (no % 2 === 1)
  {
    return "odd";
  }
  else {
    return "even";
  }
}
alert(check_even_or_odd(num));
