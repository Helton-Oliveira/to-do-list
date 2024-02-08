import { filterTaskPerCategory } from "./eventFunctions.js"; 

function showOnScreen(element, response) { 

    const query = {
        id: response.id,
        name: response.name 
    }

    element.innerHTML += `
        <div class="content__task__list" data-content="contentTask">
            <input class="checkbox" type="checkbox" value="check" id="checked" data-id="${query.id}"/>
            <label for="check" class="task" data-${query.id}="">${query.name}</label>
            <i class="fa-solid fa-plus"></i>
            </div>
        <hr class="line" />
        `;
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
    <li class="category_name" data-category="${item.id}">${item.name}</li>
    `
    filterTaskPerCategory(userId)
}

const showUserInfoMenu = (element, item) => {
    element.innerHTML = `
        <img src="./images/favicon.png" alt="profile picture" class="profile__picture">
        <h1 class="user_name">${item.name}</h1>
    ` 
}

export { completeTask, showOnScreen, markOff, showMenu, showUserInfoMenu };