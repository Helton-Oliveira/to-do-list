const menu = document.querySelector('[data-menu]');
const contentMenu = document.querySelector('[data-content]');
import { categoryByUser } from './getCategories.js';
import { getTasksPerCategory } from './requests/getTasks.js';
import { openMenu, addCategory, removeCategory } from './utils/eventFunctions.js'
import { createNewTaskCamps } from './utils/domManipulatorFunctions.js'
const categories = JSON.parse(sessionStorage.getItem('categoryList'));
const divList = document.querySelector('[data-session]');
const user = JSON.parse(sessionStorage.getItem('userSession'));
const footer = document.querySelector('[data-footer]')


openMenu(menu, contentMenu);
addCategory(user.id);
categoryByUser();
getTasksPerCategory(categories, divList, user.id);
createNewTaskCamps(footer)



 













