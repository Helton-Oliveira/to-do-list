import { filterTaskPerCategory } from "./eventFunctions.js"; 
const footer = document.querySelector('[data-footer]');

function showOnScreen(element, response = {}) { 

    const query = {
        id: response.id,
        name: response.name 
    }

    console.log(query.name !== undefined);

    if(query.name !== undefined) {
        element.innerHTML += `
            <div class="content__task__list not_add" data-content="contentTask">
                <input class="checkbox" type="checkbox" value="check" id="checked" data-id="${query.id}"/>
                <label for="check" class="task" data-${query.id}="">${query.name}</label>
                </div>
            <hr class="line" />
            `;
    } else {
        createNewTaskCamps(element)
    }

}

function markOff(task) {
    task.style.textDecoration = "none";
    task.style.color = "#575767";
}

function completeTask(task) {
    task.style.textDecoration = "line-through";
    task.style.color = "#a0a0a0";
}

function showMenu(element, item, userId) {
    element.innerHTML += `
    <div class="ul_div" data-ulDiv="">
        <li class="category_name" data-category="${item.id}">${item.name}</li>
        <i class="fa-regular fa-trash-can" data-removeCat="${item.id}"></i>
    </div>
    `
    filterTaskPerCategory(userId)
}

const showUserInfoMenu = (element, item) => {
    element.innerHTML = `
        <img src="./images/favicon.png" alt="profile picture" class="profile__picture">
        <h1 class="user_name">${item.name}</h1>
    ` 
}

function titleHandler(element, event) {
    element.innerHTML = `
            <h1 class="category_title" data-title="">${event.target.innerHTML}</h1>
            <hr class="line">
            `;
}

const createNewTaskCamps = async(element = footer) => {
    element.innerHTML = `
        <div class="content__task__list" data-content="contentTask">
            <input type="text" class="task" data-="" placeholder="adicionar tarefa" id="addTask">
            <input type="text" class="task status" data-statusTask="" placeholder="Status..." id="statusTask">
            <i class="fa-solid fa-plus" data-addTask="add"></i>
        </div>
        <hr class="line" />
    `
}

export { completeTask, showOnScreen, markOff, showMenu, showUserInfoMenu, titleHandler, createNewTaskCamps };