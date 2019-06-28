//Todo list
var arr=[];
var input=prompt("What would you like to do(add/remove/quit): ");
var i=0;
while(input!=="quit")
{
  if (input==="add")
  {
    var add=prompt("enter thing to add: ");
    arr.push(add);
  }
  else if (input==="remove")
  {
  var no=Number(prompt("enter index no to remove: "));
  arr.splice(no,1);
  alert("Item removed");
  }
  input=prompt("What would you like to do(add/remove/quit): ");
}
alert("Things are added to the todo list!");
for(var i=0;i<arr.length;i++)
{
  console.log(i+":"+arr[i]);
}
