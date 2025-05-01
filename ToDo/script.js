document.addEventListener('DOMContentLoaded', () => {
    const input_btn = document.querySelector("#add-task-btn");
    const addItem =  document.querySelector("#todo-list");
    const input = document.querySelector("#todo-input");

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => renderTask(task));

    input_btn.addEventListener('click', function(){
        const taskText = input.value.trim();
       
        if(taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            complete: false
        }

        tasks.push(newTask);
        saveTask();
        renderTask(newTask);
        input.value = "";
    });

    function renderTask(task){
       console.log(tasks);
       const li = document.createElement('li');
       li.setAttribute('data-id', task.id);

       if(task.complete){
            li.classList.add('completed');
       }
       li.innerHTML = `
       <span>${task.text}</span>
       <button>Delete</button>
       `;

       li.addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON'){
                return;
            }
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTask();
       });

       
       li.querySelector('button').addEventListener('click', (e) => {
           e.stopPropagation();
           tasks = tasks.filter(t => t.id !== task.id);
           li.remove();
           saveTask();
        });
        
        addItem.appendChild(li);
    }

    function saveTask(){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});