//                                              forEach
//forEach loop is a special type of loop in js
//it takes no function name

const month = ['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec'];

//forEach loop takes 3 argument first is element second is index no 

month.forEach(function(month_name,index) {
    console.log(`the ${index + 1} st month is ${month_name}`);
})