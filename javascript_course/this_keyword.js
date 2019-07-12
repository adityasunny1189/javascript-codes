//                                          this keyword

//this keyword is generall used for methords inside object
//this keyword is used to access to acsess object properties inside object

var object = {
    day:'monday',
    class:0,
    left:0,
    attended:0,
    add_class: function(num){
        this.class = this.class + num;
    },
    attend_class: function(num){
        this.attended = this.attended + num;
    },
    bunk_class: function(){
        this.left = this.class - this.attended;
    },
    summary: function(){
        console.log(`${this.day} total class: ${this.class} class attended: ${this.attended} class bunked: ${this.left}`);
    },
    reset: function(){
        this.class = 0;
        this.attended = 0;
        this.left = 0;
    }
}

object.add_class(9);
object.attend_class(4);
object.bunk_class();
object.summary();