const divList = document.querySelector('[data-session]');

const user = JSON.parse(sessionStorage.getItem('userSession'));

const tasksUser =  async () => {
    
    const list = await fetch(`http://localhost:3500/users/${user.id}/tasks`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            "Content-Type": "application/json"
        }
    })

    const formatedList = await list.json();    
    sessionStorage.setItem('taskList', JSON.stringify(formatedList));

    formatedList.forEach((task) => {
        showOnScreen(task);
        checkTask();
    })
}

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

function showOnScreen(task) { 

    const query = {
        id: task.id,
        name: task.name_task || task.category
    }

    divList.innerHTML += `
        <div class="content__task__list" data-content="contentTask">
            <input class="checkbox" type="checkbox" value="check" id="checked" data-id="${query.id}"/>
            <label for="check" class="task" data-${query.id}="">${query.name}</label>
            <i class="fa-solid fa-plus"></i>
            </div>
        <hr class="line" />
        `;
}

function markOff(task) {
    task.style.textDecoration = "none";
    task.style.color = "#575767";
}

function completeTask(task) {
    task.style.textDecoration = "line-through";
    task.style.color = "#a0a0a0";
}

tasksUser();


export { showOnScreen, checkTask };




