import { showOnScreen } from "../utils/domManipulatorFunctions.js"; 
import { checkTask } from "../utils/eventFunctions.js"; 

const getTasksPerCategory = async(categories, element, userId) => {
    const categoriesId = new Set(categories.map((item) => item.id));

    categoriesId.forEach( async (categoryId) => {
        const response = await fetch(`http://localhost:3500/tasksByCategories/${userId}/${categoryId}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const taskList = await response.json();
        console.log(taskList);

        taskList.forEach((item) => {
            showOnScreen(element, item);
            checkTask()
        })

    })
}

export { getTasksPerCategory };