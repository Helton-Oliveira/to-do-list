import { markOff, completeTask, showOnScreen } from "./domManipulatorFunctions.js"; 

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
            divList.innerHTML = ''
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
            query.forEach((item) => {
                showOnScreen(divList, item);
            })
            checkTask();
        })
    })
}

export { checkTask, openMenu, filterTaskPerCategory };