let emailvalidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email3');
var pass = document.getElementById('pass2');
var repass = document.getElementById('repass2');

function register(){
    let firstnamecheck = false;
    let lastnamecheck = false;
    let emailcheck = false;
    let passcheck = false;
    let repasscheck = false;

    if (firstname.value === "" || firstname.value == null){
        alert("First name is required.")
    }else{
        firstnamecheck= true;
    }

    if (lastname.value === "" || lastname.value == null){
        alert("Last name is required.")
    }else{
        lastnamecheck= true;
    }

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
    if(pass.value === '' || pass.value == null){
        alert('Password is required.');
    }else{
        if(pass.value.length >= 6 && pass.value.length <= 20){
            passcheck = true;
        }else{
            alert("Password should within 6 to 20 number.")
        }
    }

    if(repass.value === '' || repass.value == null){
        alert('Comfirm password is required.');
    }else{
        if(repass.value == pass.value){
            repasscheck = true;
        }else{
            alert("Comfirm password should be same with password.")
        }
    }

    if( firstnamecheck && lastnamecheck && emailcheck && passcheck && repasscheck == true){
        alert("Register and login successfully.")
    }
} 
