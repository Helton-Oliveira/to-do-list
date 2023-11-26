import { createUser } from '../../backend/User.js'
import { validations } from '../../backend/Validation.js';

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.elements['name'].value
    const email = e.target.elements['email'].value
    const password = e.target.elements['password'].value

    if(validations.nameValidation(name) && validations.emailValidation(email) && validations.passwordValidation(password)){

        const newUser = createUser(name, email, password);
        localStorage.setItem("cadastro", JSON.stringify(newUser));
        window.location.href = './index.html' ;

    } else {
        console.log('erro')
    } 
})

// code to log in with already registered users

const btnSignUp = document.querySelector('[data-btn]');

btnSignUp.addEventListener('click', () => {
    verifyUser();
})


function verifyUser() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const user = JSON.parse(localStorage.getItem("cadastro"));
    console.log(user.tasks)

    if(user.name === name && user.email === email && user.password === password) {
        window.location.href = './index.html' ;
    } else {
        console.log('erro')
    }
}



