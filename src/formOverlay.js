import { displayTasks, myTasks, Task } from "./displayTasks";


const formOverlay = document.createElement('div');
formOverlay.setAttribute('id', 'formOverlay');
formOverlay.classList.add('formOverlay');

const displayContainer = document.createElement('div');
displayContainer.classList.add('displayContainer');

const taskForm = document.createElement('div');
taskForm.classList.add('taskForm');

const formHeader = document.createElement('div');
formHeader.classList.add('formHeader');

const exitButton = document.createElement('button');
exitButton.classList.add('exitButton');
exitButton.innerHTML = "X"
exitButton.addEventListener('click', off)


const formTitle = document.createElement('p');
formTitle.classList.add('formTitle');
formTitle.innerHTML ='Input Task Below';


const taskTitleContainer = document.createElement('div');
taskTitleContainer.classList.add('taskTitleContainer');

const taskTitleLabel = document.createElement('label');
taskTitleLabel.classList.add('taskTitleLabel');
taskTitleLabel.setAttribute('for', 'taskTitleInput');
taskTitleLabel.innerHTML = 'Task:'

const taskTitleInput = document.createElement('input');
taskTitleInput.setAttribute('id', 'taskTitleInput');
taskTitleInput.setAttribute('type', 'text');

const descriptionContainer = document.createElement('div');
descriptionContainer.classList.add('descriptionContainer');

const descriptionLabel = document.createElement('label');
descriptionLabel.classList.add('descriptionLabel');
descriptionLabel.setAttribute('for', 'descriptionInput');
descriptionLabel.innerHTML = 'Description:'

const descriptionInput = document.createElement('input');
descriptionInput.setAttribute('id', 'descriptionInput');
descriptionInput.setAttribute('type', 'text');

const dueContainer = document.createElement('div');
dueContainer.classList.add('dueContainer');

const dueLabel = document.createElement('label');
dueLabel.classList.add('dueLabel');
dueLabel.setAttribute('for', 'dueInput');
dueLabel.innerHTML = 'Due:'

const dueInput = document.createElement('input');
dueInput.setAttribute('id', 'dueInput');
dueInput.setAttribute('type', 'text');

const priorityContainer = document.createElement('div');
priorityContainer.classList.add('priorityContainer');

const priorityLabel = document.createElement('label');
priorityLabel.classList.add('priorityLabel');
priorityLabel.setAttribute('for', 'priorityInput');
priorityLabel.innerHTML = 'Priority:'

const priorityInput = document.createElement('input');
priorityInput.setAttribute('id','priorityInput');
priorityInput.setAttribute('type', 'text');

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('addTaskBtn');
addTaskBtn.innerHTML = "ADD"


formOverlay.appendChild(displayContainer);
    displayContainer.appendChild(taskForm)
        taskForm.appendChild(formHeader);
            formHeader.appendChild(formTitle);
            formHeader.appendChild(exitButton);
        taskForm.appendChild(taskTitleContainer);
            taskTitleContainer.appendChild(taskTitleLabel);
            taskTitleContainer.appendChild(taskTitleInput)
        taskForm.appendChild(descriptionContainer);
            descriptionContainer.appendChild(descriptionLabel);
            descriptionContainer.appendChild(descriptionInput);
        taskForm.appendChild(dueContainer);
            dueContainer.appendChild(dueLabel);
            dueContainer.appendChild(dueInput);
        taskForm.appendChild(priorityContainer);
            priorityContainer.appendChild(priorityLabel);
            dueContainer.appendChild(priorityInput);
        taskForm.appendChild(addTaskBtn);


function addTaskToList() {
    let newTask = new Task(taskTitleInput.value, descriptionInput.value, dueInput.value, priorityInput.value)
    myTasks.push(newTask)
    taskTitleInput.value= '';
    descriptionInput.value = '';
    dueInput.value = '';
    priorityInput.value = '';
    displayTasks();
    off();
    console.log(myTasks)
  };

content.appendChild(formOverlay)

addTaskBtn.addEventListener('click', addTaskToList)
    
  /* for overlay form*/
function on() {
    console.log('testing')
    console.log(formOverlay)
    formOverlay.style.display = "block";
}   

function off() {
    document.getElementById("formOverlay").style.display = "none";
} 



  export { on, formOverlay, addTaskBtn, addTaskToList }