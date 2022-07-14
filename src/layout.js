import { on } from "./formOverlay"
//HEADER FUNCTION
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

    addTask.addEventListener('click', on)

    header.appendChild(searchContainer)
        searchContainer.appendChild(searchLabel)
        searchContainer.appendChild(search)
    header.appendChild(title)
    header.appendChild(addTask)

    return header
}

/* ----- MAIN CONTENT ----- */

/* create header function */
function createSidebar() {
  const sidebar = document.createElement('div')
  sidebar.classList.add('sidebar')
  
  const inbox = document.createElement('button');
  inbox.classList.add('inbox');
  inbox.classList.add('menuItem');
  inbox.innerHTML='Inbox'

  const today = document.createElement('button');
  today.classList.add('today');
  today.classList.add('menuItem');
  today.innerHTML='Today'

  const upcoming = document.createElement('button');
  upcoming.classList.add('upcoming');
  upcoming.classList.add('menuItem');
  upcoming.innerHTML='Upcoming'

  const projects = document.createElement('button');
  projects.classList.add('projects');
  projects.classList.add('menuItem');
  projects.innerHTML='Projects'

  sidebar.appendChild(inbox)
  sidebar.appendChild(today)
  sidebar.appendChild(upcoming)
  sidebar.appendChild(projects)
  

  return sidebar
}

/* create display function */
function createTaskDisplay() {
  const taskDisplay = document.createElement('div')
  taskDisplay.setAttribute('id', 'taskDisplay');
  return taskDisplay
}

/* create main content function */
function mainContent(){
  const contentContainer = document.createElement('div')
  contentContainer.classList.add('contentContainer');
  contentContainer.appendChild(createSidebar())
  contentContainer.appendChild(createTaskDisplay())
  return contentContainer
}



export { createHeader, mainContent }