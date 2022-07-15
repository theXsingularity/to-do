import { Form } from "./DOM-stuff";

const inbox = [];

//the constructor for creating "tasks"
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.displayed = false
  }
}

//example tasks and adding to inbox
{const task1 = new Task("Laundry", "small load - but need underwear", 'tomorrow', "high");
const task2 = new Task("write letter", "its almost a month past her birthday", 'tomorrow', "high");
const task3 = new Task("take out trash", "so quick!", 'tomorrow', "high");
const task4 = new Task("finish coding", "you can do it", 'tomorrow', "medium");
inbox.push(task1)
inbox.push(task2)
inbox.push(task3)
inbox.push(task4)}

//creating new DOM elements for displaying "tasks" 
{let taskDiv = document.createElement('div');
taskDiv.classList.add('taskDiv')
let titleOutput = document.createElement('div');
let descriptionOutput = document.createElement('div');
let dueDateOutput = document.createElement('div');
let priorityOutput = document.createElement('div');}

//appending elements to task display DOM element 
{taskDiv.appendChild(titleOutput);
taskDiv.appendChild(descriptionOutput);
taskDiv.appendChild(dueDateOutput);
taskDiv.appendChild(priorityOutput);}

// displays array object by creating new DOM elements
function displayTasks() {
  for (let i=0; i<inbox.length; i++) {
    //check if displayed
    if(inbox[i].displayed === false) {
      titleOutput.innerText = `Title: ${inbox[i].title}`
      descriptionOutput.innerText = `Description: ${inbox[i].description}`;
      dueDateOutput.innerText = `Due Date: ${inbox[i].dueDate}`;
      priorityOutput.innerText = `Priority: ${inbox[i].priority}`;
      if (inbox[i].read === false) {
        readOutput.innerText = ('Status: to Read')
      } else if (inbox[i].read === true) {
        readOutput.innerText = ('Status: Read')
      }
      //append DOM elements
      taskDisplay.appendChild(taskDiv.cloneNode(true));
      taskDiv.appendChild(titleOutput);
      taskDiv.appendChild(descriptionOutput);
      taskDiv.appendChild(dueDateOutput);
      taskDiv.appendChild(priorityOutput);
      //now that it has been displayed - change displayed to true
      inbox[i].displayed = true;
    } 
  }
}

function addTaskToList() {
  let newTask = new Task(taskTitleInput.value, descriptionInput.value, dueInput.value, priorityInput.value)
  inbox.push(newTask)
  taskTitleInput.value= '';
  descriptionInput.value = '';
  dueInput.value = '';
  priorityInput.value = '';
  displayTasks();
  Form.off();
  console.log(inbox)
};

const Project = {
  myProjects: [],
  currentProject: inbox,
  addNewProject: function() {
      let project = prompt("whats your project?")
      let projectObject = {project}
      projectObject.displayed = false;
      Project.myProjects.push(project)
      let projectItem = document.createElement('button')
      projectItem.classList.add('projectItem')
      projectItem.innerHTML = project
      listOfProjects.appendChild(projectItem)
      Project.linkProjects();
  },
  linkProjects: function() {
    console.log(Project.myProjects.displayed)
    const projectLinks = document.getElementsByClassName('projectItem')
    for( let i=0; i<projectLinks.length; i++) {
   
      if(Project.myProjects[i].displayed !== true) {
        projectLinks[i].addEventListener('click', function(){
            Project.currentProject = Project.myProjects[i];
            projectLinks[i].displayed === true
            console.log(Project.myProjects[i])
            
            
        })
      } else{console.log('hello')}
    }
  }
}



export { inbox, Task, displayTasks, addTaskToList, Project }
