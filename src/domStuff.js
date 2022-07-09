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
    title.innerHTML = 'YOUR TO-DO LIST'

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
    inbox.innerHTML='INBOX'

    sidebar.appendChild(inbox)

    return sidebar
  }

  //content
 

export { createHeader, createSidebar }