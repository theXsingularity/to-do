//HEADER FUNCTION
function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')

    const searchContainer = document.createElement('div')
    searchContainer.classList.add('searchContainer')

    const searchLabel = document.createElement('div')
    searchLabel.classList.add('searchLabel')
    searchLabel.innerHTML = 'SEARCH'

    const search = document.createElement('input')
    search.classList.add('search')

    const title = document.createElement('div')
    title.classList.add('title')
    title.innerHTML = 'TO-DO'

    const addTask = document.createElement('button')
    addTask.classList.add('addTask')
    addTask.innerHTML = '+'

    header.appendChild(searchContainer)
        searchContainer.appendChild(searchLabel)
        searchContainer.appendChild(search)
    header.appendChild(title)
    header.appendChild(addTask)

    return header
}


  /* sidebar */
  function createSidebar() {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    
    const inbox = document.createElement('button');
    inbox.classList.add('inbox');
    inbox.classList.add('menuItem');
    inbox.innerHTML='INBOX'

    const today = document.createElement('button');
    today.classList.add('today');
    today.classList.add('menuItem');
    today.innerHTML='TODAY'

    const upcoming = document.createElement('button');
    upcoming.classList.add('upcoming');
    upcoming.classList.add('menuItem');
    upcoming.innerHTML='UPCOMING'

    const projects = document.createElement('button');
    projects.classList.add('projects');
    projects.classList.add('menuItem');
    projects.innerHTML='PROJECTS'

    sidebar.appendChild(inbox)
    sidebar.appendChild(today)
    sidebar.appendChild(upcoming)
    sidebar.appendChild(projects)
    

    return sidebar
  }

  //content
 

export { createHeader, createSidebar }