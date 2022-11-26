let emailvalidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var email = document.getElementById('email1');
var pass = document.getElementById('pass1');

function validatelogin(){
    let emailcheck = false;
    let passcheck = false;

    if (email.value === "" || email.value == null){
        alert("Email is required.");

    }
    else{
        if (email.value.match(emailvalidate)){
            emailcheck= true;
        }else{
            alert("Email incorrect.");
        }
    }

    if (pass.value === "" || pass.value == null){
        alert("Password is required.");
    }
    else{
        if(pass.value.length >= 6 && pass.value.length <= 20){
            passcheck = true;
        }
        else{
            alert("Password should within 6 to 20 number.")
        }
    }

    if( emailcheck && passcheck == true){
        alert("Login Successfully.")
    }
} 
