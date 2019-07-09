var string1 = 'aditya';
var result = {};
for(var i=0; i<string1.length; i++)
{
    var char1 = string1[i];
    if(result[char1] > 0)
    {
        result[char1]++;
    }
    else
    {
        result[char1] = 1;
    }
}
console.log(result);
