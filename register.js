let form = document.querySelector('form')
let fullNAme = document.querySelector('#full-name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')

// new array
let arr;
let users = JSON.parse(localStorage.getItem('user'));
if (users === null) {
  arr = [];
} else {
  arr = users;
}

// global function add users 

function adduser() {
  arr.push({
    Name: fullNAme.value,
    email1: email.value,
    password: password.value

  })
  localStorage.setItem('user', JSON.stringify(arr));
  alert('your email is registered \n please signIn')
}

// add event listener start 
form.addEventListener('submit', (element) => {
  element.preventDefault()

  if (arr == 0) {
    adduser()
  }
  // if email is already in registered
  else if (arr.find(obj => obj.email1 === email.value)) {

    console.log('email is already registered');
    alert('email is already registered');
  }
  else {
    console.log('Done Email is registered');
    adduser()
  }
  fullNAme.value = ""
  email.value = ""
  password.value = ""
  window.location = 'index.html'
})





