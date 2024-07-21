
const form = document.querySelector('form');
const userName = document.querySelector('#register-user');
const email = document.querySelector('#register-email');
const password = document.querySelector('#register-password');
const againPassword = document.querySelector('#register-again-password');


const nameRegex = /^[A-Z][a-zA-Z0-9]* [a-z][a-zA-Z0-9]*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

function validateName(name){
    return nameRegex.test(name);
}

function validateEmail(email){
    return emailRegex.test(email);
}

function validatePassword(password){
    return passwordRegex.test(password);
}

function validateAgainPassword(password,againPassword){
    return password === againPassword
}


function addData(){
    //   localStorage.setItem('arr',JSON.stringify(arr)); // Convert the array to a JSON string and store it in localStorage
      localStorage.setItem('name',userName.value);
      localStorage.setItem('email',email.value);
      localStorage.setItem('password',password.value);
      localStorage.setItem('againPassword',againPassword.value);
}



const arr = []
let Array = []

function validateForm(){
    Array = [];

    if(!validateName(userName.value)){
        Array.push('Invalid username. It should start with an uppercase letter and be 6 to 15 characters long.');
    }

    if(!validateEmail(email.value)){
        Array.push('Invalid Email')
    }

    if(!validatePassword(password.value)){
        Array.push('Invalid Password. It should be at least 8 characters long and contain at least one special character.')
    }

    if(!validateAgainPassword(password.value,againPassword.value)){
        Array.push('Passwords do not match')
    }

    if(Array.length> 0){
        alert(Array.join('\n'));
        return false;
    }
    return true;
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(validateForm()){
        arr.push({
            userName: userName.value,
            email: email.value,
            password: password.value,
            againPassword: againPassword.value
        })
        addData();
        form.reset()
        alert('Registration Successful. Redirecting to login page.');
        window.location ='index.html'
    }
});