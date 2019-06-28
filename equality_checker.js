//equality checker
var arr=['a','a','a','a','a'];
var x=arr[0];
var num=0;
for(var i=0;i<arr.length;i++)
{
  if(arr[i]===x)
  {
    num++;
  }
  else{
    num=num;
  }
}
if(num===arr.length)
{
  console.log("equal");
}
else {
  console.log("unequal");
}
