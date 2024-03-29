import { markOff, completeTask, showOnScreen, titleHandler, createNewTaskCamps } from "./domManipulatorFunctions.js"; 

const checkTask = () => {
    const checkbox = document.querySelectorAll('#checked');

    checkbox.forEach((box) => {
        box.addEventListener('change', async (e) => {
            const eventId = e.target.dataset.id;
            const task = document.querySelector(`[data-${eventId}]`)
            
            if(e.target.checked) {
                completeTask(task);
                new Promise((resolve, reject) => {
                    setTimeout(async () => {
                        await fetch(`http://localhost:3500/tasks/${eventId}`, {
                            method: 'DELETE',
                            mode: 'cors',
                            credentials: 'omit',
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                    }, 10000)
                })

            return console.log('tarefa concluida');
            } else {
                markOff(task);
            }
        })
    })
}

function openMenu(element, element2) {
    element.addEventListener('click', () => { 
        element2.classList.toggle('closed');
        element2.classList.toggle('active');  
    })
}

const filterTaskPerCategory  = async (userId) => {
    const divList = document.querySelector('[data-session]');
    const li = document.querySelectorAll('[data-category]');

    console.log(li)

    li.forEach((event) => {
        event.addEventListener('click', async (e) => {
            titleHandler(divList, e);
            const eventId = e.target.dataset.category
            console.log(eventId)
            const response = await fetch(`http://localhost:3500/tasksByCategories/${userId}/${eventId}`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'omit',
                headers: {
                    "Content-Type": "application/json"
                },
            })
        
            const query = await response.json();

            if(query.length !== 0){
                query.forEach((item) => {
                    showOnScreen(divList, item);
                })
                checkTask();
                createNewTaskCamps();
                addTask(eventId)
            } else {
                showOnScreen(divList);
                createNewTaskCamps();
                addTask(eventId);
            }
        })
    })
}

const addCategory = (userId) => {
    const newCategoryText = document.querySelector('[data-addCategory]');
    const btnAddCategory = document.querySelector('[data-add]')
    
    btnAddCategory.addEventListener('click', async() => {
        const newCategory = {
            name: newCategoryText.value,
            user_id: userId
        }
        const response = await fetch('http://localhost:3500/category/ ' ,{
            method: 'POST',
            mode: 'cors',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json"
            },
           body: JSON.stringify(newCategory)
        })
        const sucess = await response.json();
        console.log(sucess)
    })
}

const addTask = (categoryId) => {
    const btnAddTask = document.querySelector('[data-addTask]')  ;
    const newTaskText = document.querySelector('#addTask' ) 
    const newStatusText = document.querySelector('#statusTask') 
    
    btnAddTask.addEventListener('click', async(e) => {
        
        const newTask = {
            name: newTaskText.value,
            status: newStatusText.value,
            category_id: categoryId
        }

        console.log(newTask);

        const response = await fetch('http://localhost:3500/tasks', {
            method: 'POST',
            mode: 'cors',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json"
            },
           body: JSON.stringify(newTask)
        })
    })

}

const removeCategory = () => {
    const btnRemove = document.querySelectorAll('[data-removeCat]');

    btnRemove.forEach((element) => {
        element.addEventListener('click', async (e) => {
            const eventId = e.target.dataset.removecat;
    
            const response = await fetch(`http://localhost:3500/category/${eventId}`, {
                method: 'DELETE',
                mode: 'cors',
                credentials: 'omit',
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const deleted = await response.json()
        })
    })
}


export { checkTask, openMenu, filterTaskPerCategory, addCategory, addTask, removeCategory };


