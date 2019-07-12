var Todo = {
    day:'monday',
    class:0,
    attended:0,
    absent:0,
}

function class_left(todo,class_to_attend = 0){
    todo.class = todo.class + class_to_attend;
}

function class_attended(todo,class_to_attend = 0){
    todo.attended = todo.attended + class_to_attend;
}

function class_absent(todo){
    todo.absent = todo.class - todo.attended;
}

function summary(todo){
    console.log(`${todo.day} summary total class was ${todo.class} class attended : ${todo.attended} total absent : ${todo.absent}`);
}

function reset_shedule(todo){
    todo.class = 0;
    todo.attended = 0;
    todo.absent = 0;
}

class_left(Todo, 9);
class_attended(Todo,4);
class_left(Todo,3);
class_attended(Todo,6);
class_attended(Todo,1);
class_absent(Todo);
summary(Todo);
reset_shedule(Todo);
summary(Todo);