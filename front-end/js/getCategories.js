const ul = document.querySelector('[data-list]');
import { showMenu } from './utils/domManipulatorFunctions.js';
const infoUserMenu = document.querySelector('[data-user]');
const user = JSON.parse(sessionStorage.getItem('userSession'));
import { showUserInfoMenu } from './utils/domManipulatorFunctions.js';

const categoryByUser =  async () => {

    showUserInfoMenu(infoUserMenu, user);

    const response = await fetch(`http://localhost:3500/categoryPerUser/${user.id}`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            "Content-Type": "application/json"
        }
    })

    const listOfCategory = await response.json();    
    sessionStorage.setItem('categoryList', JSON.stringify(listOfCategory));

    listOfCategory.forEach((task) => {
        showMenu(ul, task, user.id);
    })
}



export { categoryByUser };




