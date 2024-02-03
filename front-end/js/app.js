import { validations } from '../../backend/Validation.js';

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.elements['name'].value
    const email = e.target.elements['email'].value
    const password = e.target.elements['password'].value
    const cpf = e.target.elements['cpf'].value

    const data = {
        "name": name.toString(),
        "cpf": cpf.toString(),
        "email": email.toString(),
        "password": password.toString(),
    }

    if(validations.nameValidation(name) && validations.emailValidation(email) && validations.passwordValidation(password)){
        window.location.href = './index.html' ;
        cadaster(data);
        return;
    } 
    
    console.log('erro');
})


// code to log in with already registered users

const btnSignUp = document.querySelector('[data-btn]');

btnSignUp.addEventListener('click', () => {
    verifyUser();
})


async function verifyUser() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const cpf = document.querySelector('#cpf').value;

    const query = await fetch(`http://localhost:3500/users/`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            "Content-Type": "application/json"
        }
    });

    const formatedQuery = await query.json();
    const user = formatedQuery.find((user) => user['password'] === password);

    if(user['name'] === name && user['email'] === email && user['password'] === password && user['cpf'] === cpf) {    
        sessionStorage.setItem('userSession', JSON.stringify(user));
        window.location.href = './perfil.html' ;
        return;
    }

    console.log('erro');
}

async function cadaster(data) {

    const options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            "Content-Type": "application/json"
        },
       body: JSON.stringify(data)
    }
    const response = await fetch(`http://localhost:3500/users/`, options);
     const formated = await response.json()
    console.log(formated)

    if(response.ok) {
        console.log('criado');
    }

    return console.log('error')
}



