class Task {
    #name 
    #duration 
    #date
    #type
    #id

    constructor(name, duration, date, type, id) {
        this.#name = name 
        this.#duration = duration 
        this.#date = date 
        this.#type = type 
        this.#id = id
    }

    get name(){
        return this.#name
    }

    get duration() {
        return this.#duration
    }

    get date() {
        return this.#date
    }

    get type(){
        return this.#type
    }

    checkTask(cheking, method) {
        if(cheking && method.getItem(`${this.#id}`) !== null) {
            method.removeItem(`${this.#id}`);
        }
    }

}


function createId() {
    let id = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';

    for(let i = 0; i < 10 ; i++) {
        id += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }

    return id ;
}

const taskList = [];

function createTask(name, duration, date, type) {
    const newTask = new Task (name, duration, date, type, createId());
    taskList.push(newTask)
}

export {createId, createTask} 

