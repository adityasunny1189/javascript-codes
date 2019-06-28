//reverse of an array
var arr=[];
var no=Number(prompt("enter no of elements in the array"));
for(var i=0;i<no;i++)
{
  var add=prompt("enter item to add");
  arr.push(add);
}
for(var j=no-1;j>=0;j--)
{
  console.log(arr[j]);
}
