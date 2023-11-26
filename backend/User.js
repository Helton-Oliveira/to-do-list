import {createId} from './task.js'

export default class User {
    name
    email
    id
    password
    tasks
    constructor(name, email, password, id, tasks = []) {
        this.name = name 
        this.email = email 
        this.id = id
        this.password = password
        this.tasks = tasks
    }

    get name() {
        return this.name
    }

    get email() {
        return this.email
    }

    get password() {
        return this.password
    }

    get id() {
        return this.id
    }

    get tasks() {
        this.tasks
    }
    
}

function createUser(name, email, password, tasks = []) {
    const newUser = new User(name, email, password, createId(), tasks);

    return  newUser  ;
}

export {createUser};



