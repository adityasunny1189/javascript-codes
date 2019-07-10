const todo_list = [];
todo_list.unshift('complete javascript programming');
todo_list.push('complete algorithm and datastructure in js');
todo_list.push('complete python');
for (var i = 0; i< todo_list.length; i++)
{
    console.log(`your ${i + 1} task is ${todo_list[i]}`);
}