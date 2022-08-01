import { Form } from './DOM'
import { projectStuff } from './projects';



//the constructor for creating "tasks"
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.displayed = false
    this.rmvBtnTog = false
  }
}

//example tasks and adding to inbox
const task1 = new Task("Laundry", "small load - but need underwear", 'tomorrow', "high");
const task2 = new Task("write letter", "its almost a month past her birthday", 'tomorrow', "high");
const task3 = new Task("take out trash", "so quick!", 'tomorrow', "high");
const task4 = new Task("finish coding", "you can do it", 'tomorrow', "medium");
projectStuff.currentProject.tasks.push(task1)
projectStuff.currentProject.tasks.push(task2)
projectStuff.currentProject.tasks.push(task3)
projectStuff.currentProject.tasks.push(task4)



//creating new DOM elements for displaying "tasks" 
let taskDiv = document.createElement('div');
taskDiv.classList.add('taskDiv')
let titleOutput = document.createElement('div');
let descriptionOutput = document.createElement('div');
let dueDateOutput = document.createElement('div');
let priorityOutput = document.createElement('div');
let projOutput = document.createElement('div');


//appending elements to task display DOM element 

/* taskDiv.appendChild(titleOutput);
taskDiv.appendChild(descriptionOutput);
taskDiv.appendChild(dueDateOutput);
taskDiv.appendChild(priorityOutput);
taskDiv.appendChild(projOutput); */

// displays array object by creating new DOM elements
function displayTasks() {
  for (let i=0; i<projectStuff.currentProject.tasks.length; i++) {
    //check if displayed
    if(projectStuff.currentProject.tasks[i].displayed === false) {
      
      titleOutput.innerText = `Title: ${projectStuff.currentProject.tasks[i].title}`
      descriptionOutput.innerText = `Description: ${projectStuff.currentProject.tasks[i].description}`;
      dueDateOutput.innerText = `Due Date: ${projectStuff.currentProject.tasks[i].dueDate}`;
      priorityOutput.innerText = `Priority: ${projectStuff.currentProject.tasks[i].priority}`;
      //append DOM elements
      taskDiv.appendChild(titleOutput);
      taskDiv.appendChild(descriptionOutput);
      taskDiv.appendChild(dueDateOutput);
      taskDiv.appendChild(priorityOutput);
      taskDiv.appendChild(projOutput);

      const editBtn = document.createElement('button')
      editBtn.innerHTML = 'edit'
      editBtn.addEventListener('click', event => {
        console.log('test')
      });
      taskDiv.appendChild(editBtn);
      
      taskDisplay.appendChild(taskDiv.cloneNode(true));
    
      //now that it has been displayed - change displayed to true
      projectStuff.currentProject.tasks[i].displayed = true;
      console.log('task displayed')
    } 
  }
}

// ---- form functionality --- 
function addTaskToList() {
  let newTask = new Task(taskTitleInput.value, descriptionInput.value, dueInput.value, priorityInput.value)
  projectStuff.currentProject.tasks.push(newTask)
  taskTitleInput.value= '';
  descriptionInput.value = '';
  dueInput.value = '';
  priorityInput.value = '';
  //displayTasks();
  Form.off();
};

function removeAllChildNodes() {
  for (let i=0; i<projectStuff.currentProject.tasks.length; i++) {
    projectStuff.currentProject.tasks[i].displayed = false
  }
    while (taskDisplay.firstChild) {
      //console.log(taskDisplay.firstChild)
      taskDisplay.removeChild(taskDisplay.firstChild);
      console.log('removed children')
  }
  console.log('ran removed allchildNodes')
}
export { Task, displayTasks, addTaskToList, removeAllChildNodes  }
