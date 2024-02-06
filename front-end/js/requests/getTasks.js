import { showOnScreen } from "../utils/domManipulatorFunctions.js"; 
import { checkTask } from "../utils/eventFunctions.js"; 

const getTasksPerCategory = async(categories, element) => {
    const categoriesId = new Set(categories.map((item) => item.id));

    categoriesId.forEach( async (id) => {
        const response = await fetch(`http://localhost:3500/tasksByCategories/${id}/`, {
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