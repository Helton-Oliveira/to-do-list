const menu = document.querySelector('[data-menu]');
const contentMenu = document.querySelector('[data-content]');
import { categoryByUser } from './getCategories.js';
import { getTasksPerCategory } from './requests/getTasks.js';
import { openMenu, filterTaskPerCategory } from './utils/eventFunctions.js';
const categories = JSON.parse(sessionStorage.getItem('categoryList'));
const divList = document.querySelector('[data-session]');


openMenu(menu, contentMenu);
categoryByUser();
getTasksPerCategory(categories, divList);



 













