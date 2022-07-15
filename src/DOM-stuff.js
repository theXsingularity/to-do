import { addTaskToList, Project } from "./display";

/* ----- HEADER ----- */
function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')

    const searchContainer = document.createElement('div')
    searchContainer.classList.add('searchContainer')

    const searchLabel = document.createElement('div')
    searchLabel.classList.add('searchLabel')
    searchLabel.innerHTML = ''

    const search = document.createElement('input')
    search.classList.add('search')
    search.setAttribute('id', 'search')
    search.placeholder = "Search To-Do's!"
    
    const title = document.createElement('div')
    title.classList.add('title')
    title.innerHTML = ''

    const addTask = document.createElement('button')
    addTask.classList.add('addTask')
    addTask.innerHTML = '+'

    addTask.addEventListener('click', Form.on)

    header.appendChild(searchContainer)
        searchContainer.appendChild(searchLabel)
        searchContainer.appendChild(search)
    header.appendChild(title)
    header.appendChild(addTask)

    return header
}

/* ----- MAIN CONTENT ----- */
function createSidebar() {
  const sidebar = document.createElement('div')
  sidebar.classList.add('sidebar')
  
  const inbox = document.createElement('div');
  inbox.classList.add('inbox');
  inbox.classList.add('menuItem');
  inbox.innerHTML='Inbox'

  const today = document.createElement('div');
  today.classList.add('today');
  today.classList.add('menuItem');
  today.innerHTML='Today'

  const upcoming = document.createElement('div');
  upcoming.classList.add('upcoming');
  upcoming.classList.add('menuItem');
  upcoming.innerHTML='Upcoming'

  const projectsContainer = document.createElement('div')
  projectsContainer.classList.add('projectsContainer')
  projectsContainer.classList.add('menuItem');
  
  const projectsListItem = document.createElement('div')
  projectsListItem.classList.add('projectsListItem')

  const projects = document.createElement('div');
  projects.classList.add('projects');
  projects.innerHTML='Projects'

  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('addProjectBtn')
  addProjectBtn.innerHTML = "+"

  addProjectBtn.addEventListener('click', Project.addNewProject)
  
  const listOfProjects = document.createElement('div')
  listOfProjects.setAttribute('id','listOfProjects')

  sidebar.appendChild(inbox)
  sidebar.appendChild(today)
  sidebar.appendChild(upcoming)
  sidebar.appendChild(projectsContainer)
    projectsContainer.appendChild(projectsListItem)
      projectsListItem.appendChild(projects)
      projectsListItem.appendChild(addProjectBtn)
    projectsContainer.appendChild(listOfProjects)
  

  return sidebar
}
function createTaskDisplay() {
  const taskDisplay = document.createElement('div')
  taskDisplay.setAttribute('id', 'taskDisplay');
  return taskDisplay
}

/* create main w/ sidebar and taskDisplay */
function mainContent(){
  const contentContainer = document.createElement('div')
  contentContainer.classList.add('contentContainer');
  contentContainer.appendChild(createSidebar())
  contentContainer.appendChild(createTaskDisplay())
  return contentContainer
}

/* ----- FORM ----- */
const Form = {
  createForm() {
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
    exitButton.addEventListener('click', Form.off)


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
    addTaskBtn.addEventListener('click', addTaskToList)

    //appending tree
    {formOverlay.appendChild(displayContainer);
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
            taskForm.appendChild(addTaskBtn);}

  return formOverlay
  },
  on() {
    
    formOverlay.style.display = "block";
  },
  off() {
    document.getElementById("formOverlay").style.display = "none";
  } 
}

/* ----- project stuff ----- */

export { createHeader, mainContent, Form }