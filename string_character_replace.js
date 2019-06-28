//to replace - with _
var str=prompt("enter a string: ");
function conversion(string) {
  for(var i=0;i<string.length;i++)
  {
    if(string[i] ===  "-")
    {
      string[i] === "_";
    }
    if (string[i]  === "_") {
      string[i] === "-";
    }
    else {
     string[i]  === string[i];
    }
  }
  return string;
}
alert(conversion(str));
