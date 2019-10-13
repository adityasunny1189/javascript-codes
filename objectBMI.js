var object = {
  calcBMI : function(weight , height) {
      return weight / (height * height);
  }
};

var john = object.calcBMI(63,1.7);
var mark = object.calcBMI(65,1.8);

if(john > mark)
{
    console.log("John has greater BMI");
}
else {
  console.log("mark has greater BMI");
}
