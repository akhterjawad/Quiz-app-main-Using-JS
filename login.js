

let users = JSON.parse(localStorage.getItem('user'));
console.log(users);

let form = document.querySelector('form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let pera1 = document.querySelector('#pera1')
let pera2 = document.querySelector('#pera2')

form.addEventListener('submit', (element) => {
    element.preventDefault()

    if (users === null) {
        arr = [];
    } else {
        arr = users;
    }


    let register = '';
    let passworderror = '';

    let userFound = false;  // To check if user exists
    let passwordCorrect = false;  // To check if password is correct
    if (users != null) {


        users.forEach(element => {
            if (element.email1 === email.value) {
                userFound = true;
                if (element.password === password.value) {
                    passwordCorrect = true;
                }
            }
        });
    }

    if (userFound && passwordCorrect) {
        console.log("done you login");
        window.location = 'quiz.html';
    } else if (userFound) {
        passworderror = "Enter Correct Password";
        console.error(passworderror);
    } else {
        register = "Please Register First";
        console.error(register);
    }


    pera1.innerHTML = register
    pera2.innerHTML = passworderror



    // })



    // users.find((elm)=>{
    //     if (elm.email1 === email.value) {
    //         console.log("find in work");
    //     }
    //     else{
    //         console.log("not work" );
    //     }



    // })




})


