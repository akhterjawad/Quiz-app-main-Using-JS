const email = localStorage.getItem('email')
const password = localStorage.getItem('password')
const formLogin = document.querySelector('form');

formLogin.addEventListener('submit', function(event){
    event.preventDefault();
    if (email === null || password === null) {
        alert('Please register before attempting to login.');
        return
    }
    const emailLogin = document.querySelector('#email-login').value;
    const passwordLogin = document.querySelector('#password-login').value;

    if(emailLogin === email && passwordLogin === password ){
        alert('Login Successful')
        window.location = 'quiz.html'
    }else{
        alert('Email and Password do not match')
    }
    formLogin.reset()
})

