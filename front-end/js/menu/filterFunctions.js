import { showOnScreen } from "../utils/domManipulatorFunctions.js"
import { checkTask } from "../utils/eventFunctions.js" 

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



export { addCategory, getTaskPerCategory };