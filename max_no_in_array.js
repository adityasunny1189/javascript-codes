//max no in the array
var arr=[];
var max=0;
var no=Number(prompt("enter no of elements in the array"));
for(var i=0;i<no;i++)
{
  var add=Number(prompt("enter item to add"));
  arr.push(add);
}
for (var j=0;j<no;j++)
{
  if(arr[j]>arr[j+1]&&arr[j]>max)
  {
    max=arr[j];
  }
  else if(arr[j+1]>arr[j]&&arr[j+1]>max)
  {
    max=arr[j+1];
  }
}
console.log(max);
