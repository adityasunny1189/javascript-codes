//sum of all elements in the array
var arr=[];
var sum=0;
var no=Number(prompt("enter total no of elements"));
for(var i=0;i<no;i++)
{
  var add=Number(prompt("enter no to add"));
  arr.push(add);
}
for(var j=0;j<no;j++)
{
  sum=sum+arr[j];
}
console.log(sum);
