//                                      username and password checker

var login = {
    userName:'',
    password:'',
    check_userName: function(user){
        if (user.length > 5){
            console.log('true');
        }
        else{
            console.log('false');
        }
    },
    check_password: function(pass){
        if (pass.length > 15){
            console.log('true');
        }
        else{
            console.log('false');
        }
    }
}

login.check_userName('adityasunny1189');
login.check_password('adisunny123');