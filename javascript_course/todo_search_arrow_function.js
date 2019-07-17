
const arr1 = [{
        title:'complete javascript',
        is_done:false,
    },{
        title:'complete c programming',
        is_done:true,
    },{
        title:'complete maths',
        is_done:true,
    },{
        title:'complete python',
        is_done:true,
    },{
        title:'complete algorithms',
        is_done:false,
    },{
        title:'complete datastructure',
        is_done:false,
    }]

const fun1 = arr1.filter((arr) => {
    arr.is_done === false
    return arr.title;
})

console.log(fun1);