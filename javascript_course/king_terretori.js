//In javascript if we are not decaring a variable
//and we are using it then that variable will automatically
//be declared as global variable

let ruler = 'principal';
if(true)
{
    let ruler = 'HOD';                      //BAD EXAMPLE OF DECLARING VARIABLES
    if(true)
    {
        let ruler = 'teacher';
        if(true)
        {
            head = 'aditya'                 //here head is not declared by any keyword so it's global variable 
            let ruler = 'CR';
            console.log(ruler);            //ruler keyword local scope is CR
            console.log(head);
        }
        console.log(ruler);               //ruler keyword local scope is teacher
        console.log(head);
    }
    console.log(ruler);                  //ruler keyword local scope is HOD
    console.log(head);
}
console.log(ruler);                     //ruler keyword scope is principal
console.log(head);