let emailvalidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let datevalidate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
let timevalidate = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
var name4 = document.getElementById('name4');
var date = document.getElementById('date4');
var email4 = document.getElementById('email4');
var time = document.getElementById('time4');
var person = document.getElementById('person4');

function reservation(){
    let name4check = false;
    let datecheck = false;
    let email4check = false;
    let timecheck = false;
    let personcheck = false;

    if (name4.value === "" || name4.value == null){
        alert("Name is required.")
    }else{
        name4check= true;
    }

    if (date.value === "" || date.value == null){
        alert("Date is required.")
    }
    else{
        if (date.value.match(datevalidate)){
            datecheck= true;
        }else{
            alert("Date format must be in dd/mm/yyyy.");
        }
    }

    if (email4.value === "" || email4.value == null){
        alert("Email is required.");
    }
    else{
        if (email4.value.match(emailvalidate)){
            email4check= true;
        }else{
            alert("Email incorrect.");
        }
    }

    if(time.value === '' || time.value == null){
        alert('Time is required.');
    }
    else{
        if (time.value.match(timevalidate)){
            timecheck= true;
        }else{
            alert("Time format must be in hh:mm.");
        }
    }

    if(person.value === 'Person'){
        alert('Please choose the quantity of person also.');
    }else{
        personcheck = true;
    }

    if( name4check && email4check && datecheck && timecheck && personcheck == true){
        alert("Booking successfully.")
    }
} 