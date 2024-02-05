import { showOnScreen, checkTask } from "../tasksList.js"

const addCategory = async(input) => {

    const search = {
        category: input
    }

    const response = fetch(`http://localhost:3500/category/`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(search)
    })

    const query = await response.json()
    console.log(query)
}

const getTaskPerCategory  = async(filter, user) => {
    const response = await fetch(`http://localhost:3500/tasks/${filter}/${user}`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            "Content-Type": "application/json"
        },
    })

    const query = await response.json();
    query.forEach((item) => {
        showOnScreen(item);
    })
    checkTask();
}

export { addCategory, getTaskPerCategory };