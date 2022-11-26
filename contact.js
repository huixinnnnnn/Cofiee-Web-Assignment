let emailvalidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var email = document.getElementById('email2');
var name1 = document.getElementById('name');
var subject = document.getElementById('subject');
var message = document.getElementById('message');

function contact(){
    let emailcheck = false;
    let namecheck = false;
    let subjectcheck = false;
    let messagecheck = false;

    if (name1.value === "" || name1.value == null){
        alert("Name is required.")
    }else{
        namecheck= true;
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

    if(subject.value === '' || subject.value == null){
            alert('Subject is required.');
    }else{
        if(subject.value.length >=1 && subject.value.length <= 40){
            subjectcheck=true;
        }else{
        alert("Subject should not be more than 20 characters.")
        }
    }

    if(message.value === '' || message.value == null){
        alert('Message is required.');
    }else{
        if(message.value.length >=1 && message.value.length <= 250){
            messagecheck=true;
        }else{
            alert("Message should not be more than 150 characters.")
        }
    }

    if( emailcheck || passcheck || subjectcheck || messagecheck==true){
        alert("Sent successfully.")
    }
} 
