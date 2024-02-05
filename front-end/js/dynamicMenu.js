const menu = document.querySelector('[data-menu]');
const contentMenu = document.querySelector('[data-content]');
const ul = document.querySelector('[data-list]');
const infoUserMenu = document.querySelector('[data-user]');
const user = JSON.parse(sessionStorage.getItem('userSession'));
const taskList = JSON.parse(sessionStorage.getItem('taskList'));
const inputAddCategory = document.querySelector('[data-category]');
const btnAddCategory = document.querySelector('[data-add]');
import { addCategory, getTaskPerCategory} from "./menu/filterFunctions.js";
const divList = document.querySelector('[data-session]');




infoUserMenu.innerHTML = `
    <img src="./images/favicon.png" alt="profile picture" class="profile__picture">
    <h1 class="user_name">${user.name}</h1>
`

menu.addEventListener('click', () => { 
    openMenu() 

})

const openMenu = () => {
    contentMenu.classList.toggle('closed');
    contentMenu.classList.toggle('active'); 
}

const indexCategory = new Set(taskList.map(item => item.category_id))

const categories = async (indexCategory) => {
    const arrCategories = [...indexCategory];

    return arrCategories.map(async(item) => {
        const response = await fetch(`http://localhost:3500/category/${item}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const categories = await response.json();

        ul.innerHTML += `
            <li class="category_name" data-category="${categories.id}">${categories.category}</li>
        `

        const filters = document.querySelectorAll('[data-category]');

        filters.forEach((element) => {
            element.addEventListener('click', (event) => {
                divList.innerHTML = ''
                console.log(event.target.dataset.category)
                getTaskPerCategory(event.target.dataset.category, user.id)
            } )
        })
    }
)
}

categories(indexCategory);






