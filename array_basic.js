function calculate_price(x)
{
  if(x > 50 && x < 150)
  {
    gst = x * 12 / 100;
  }
  else if(x > 200 && x < 400)
  {
    gst = x * 28 / 100;
  }
  else
  {
    gst = x * 29 / 100;
  }
}

function display(arr[])
{
  for(var i = 0 ; i < arr.length ; i++)
  {
    console.log(arr[i]);
  }
}

var item_array[3];
var gst_price_array[3];
var total_price_array[3];

var item1 = prompt("Enter price");
var item2 = prompt("Enter price of second product");
var item3 = prompt("Enter price of third product");

item_array.push(item1);
item_array.push(item2);
item_array.push(item3);

var gst = 0;

display(item_array);
