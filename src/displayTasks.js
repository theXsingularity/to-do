
import { taskDisplay } from "./index";
console.log('reading display library')

let myTasks = [];


//the constructor for creating "tasks"
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }
  }

  //example tasks and adding to myTasks
  const task1 = new Task("Laundry", "small load - but need underwear", 'tomorrow', "high");
  const task2 = new Task("write letter", "its almost a month past her birthday", 'tomorrow', "high");
  const task3 = new Task("take out trash", "so quick!", 'tomorrow', "high");
  const task4 = new Task("finish coding", "you can do it", 'tomorrow', "medium");
  myTasks.push(task1)
  myTasks.push(task2)
  myTasks.push(task3)
  myTasks.push(task4)

  //creating new DOM elements for displaying "tasks" 
let taskDiv = document.createElement('div');
taskDiv.classList.add('taskDiv')
let titleOutput = document.createElement('div');
let descriptionOutput = document.createElement('div');
let dueDateOutput = document.createElement('div');
let priorityOutput = document.createElement('div');

//appending elements to task display DOM element 
taskDiv.appendChild(titleOutput);
taskDiv.appendChild(descriptionOutput);
taskDiv.appendChild(dueDateOutput);
taskDiv.appendChild(priorityOutput);

// displays array object by creating new DOM elements
function displayTasks() {
  
  for (let i=0; i<myTasks.length; i++) {
    titleOutput.innerText = `Title: ${myTasks[i].title}`
    descriptionOutput.innerText = `Description: ${myTasks[i].descriptionOutput}`;
    dueDateOutput.innerText = `Due Date: ${myTasks[i].dueDate} pages`;
    priorityOutput.innerText = `Priority: ${myTasks[i].priority} pages`;
  
    //append DOM elements
    taskDisplay.appendChild(taskDiv.cloneNode(true));
    taskDiv.appendChild(titleOutput);
    taskDiv.appendChild(descriptionOutput);
    taskDiv.appendChild(dueDateOutput);
    taskDiv.appendChild(priorityOutput);

  } 
  }





export {displayTasks}
