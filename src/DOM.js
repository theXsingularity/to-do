import { projectStuff } from './projects'
import { addTaskToList, displayTasks, inbox, removeAllChildNodes } from "./display";

const DOM = {
//--- LAYOUT
    header: function () {
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
    },
    sidebar: function () {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    
    const inboxBtn = document.createElement('button');
    inboxBtn.classList.add('inbox');
    inboxBtn.classList.add('menuItem');
    inboxBtn.innerHTML='Inbox'
    inboxBtn.addEventListener('click', event => {
      projectStuff.changeCurrentProject(projectStuff.myProjects[0]) 
      removeAllChildNodes();
      displayTasks();
      console.log('current project:')
      console.log(projectStuff.currentProject)
    })

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
    
    const projectHeader = document.createElement('div')
    projectHeader.classList.add('projectHeader')
    
    const projectsTitle = document.createElement('div');
    projectsTitle.classList.add('projectsTitle');
    projectsTitle.innerHTML='Projects'
    
    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('addProjectBtn')
    addProjectBtn.innerHTML = "+"
    addProjectBtn.addEventListener('click', projectStuff.addNewProject)
    
    const listOfProjects = document.createElement('div')
    listOfProjects.setAttribute('id','listOfProjects')
    
    sidebar.appendChild(inboxBtn)
    sidebar.appendChild(today)
    sidebar.appendChild(upcoming)
    sidebar.appendChild(projectsContainer)
        projectsContainer.appendChild(projectHeader)
            projectHeader.appendChild(projectsTitle)
            projectHeader.appendChild(addProjectBtn)
        projectsContainer.appendChild(listOfProjects)
    
    return sidebar
    },
    taskDisplay: function () {
    const taskDisplay = document.createElement('div')
    taskDisplay.setAttribute('id', 'taskDisplay');
    return taskDisplay
    },
    mainContent: function () {
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('contentContainer');
    contentContainer.appendChild(this.sidebar())
    contentContainer.appendChild(this.taskDisplay())
    return contentContainer
    },
//--- PROJECT STUFF
    appendProject: function() {
      //create projlink w/ btns container
        let projectListContainer = document.createElement('div')
        projectListContainer.classList.add('projectListContainer')
        //add list button
        let projectItem = document.createElement('button')
        projectItem.classList.add('projectItem')
        projectItem.innerHTML = (projectStuff.myProjects[projectStuff.myProjects.length-1].name)
        projectItem.setAttribute("data-projLink", (projectStuff.myProjects.length-1))
        projectItem.addEventListener('click', event => {
          let attribute = event.target.getAttribute('data-projLink')
          removeAllChildNodes();
          projectStuff.changeCurrentProject(projectStuff.myProjects[`${attribute}`]) 
          console.log(projectStuff.myProjects)
          
          displayTasks();
          console.log('current project:')
          console.log(projectStuff.currentProject)
          //displayTasks()
        })
        //add rmv button
        let projectRmvBtn = document.createElement('button')
        projectRmvBtn.innerHTML = '-'
        projectRmvBtn.classList.add('projectRmvBtn')
        projectRmvBtn.setAttribute("data-rmvBtn", (projectStuff.myProjects.length-1))
        
        projectRmvBtn.addEventListener('click', event => {
          let attribute = event.target.getAttribute('data-rmvBtn');
          let projectToRmv = document.querySelector(`[data-rmvBtn="${attribute}"]`)
          let formProjRmv = document.querySelector(`[data-ddItem="${attribute}"]`)
          projectStuff.myProjects.splice(attribute,1);
          projectToRmv.parentElement.remove()
          formProjRmv.remove()
          console.log('myProjects')
          console.log(projectStuff.myProjects)
          
      })
      //append list item to listOfProjects
      listOfProjects.appendChild(projectListContainer)
      projectListContainer.appendChild(projectItem)
      projectListContainer.appendChild(projectRmvBtn)
      console.log( projectStuff.currentProject.rmvBtnTog)
      projectStuff.currentProject.rmvBtnTog = true;
      console.log( projectStuff.currentProject.rmvBtnTog)

      //append project to form DD
      let ddItem = document.createElement('option')
      ddItem.innerHTML = (projectStuff.myProjects[projectStuff.myProjects.length-1].name)
      ddItem.setAttribute("data-ddItem", (projectStuff.myProjects.length-1))
      myList.appendChild(ddItem)  
    },
    test: function() {
        return ('test')
    },
}


//FORM
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
  
      const formContainer = document.createElement('div')
      formContainer.classList.add('formConatiner');
      const taskTitleContainer = document.createElement('div');
      taskTitleContainer.classList.add('taskTitleContainer', 'formItem');

      const ddContainer = document.createElement('div')
      ddContainer.classList.add('ddContainer')

      const myList = document.createElement('select')
      myList.setAttribute('id', 'myList')
      myList.addEventListener('click', event => {
     
        let mylist = document.getElementById("myList"); 
        let ddInput = document.getElementById('projectDDItems')
        ddInput.value = mylist.options[myList.selectedIndex].innerHTML;  
        projectStuff.currentProject = projectStuff.myProjects[myList.selectedIndex + 1]
        console.log("current project")
        console.log(projectStuff.currentProject)
  
      })

      const ddInput = document.createElement('input')
      ddInput.setAttribute('type', 'text')
      ddInput.setAttribute('id', 'projectDDItems')

      const taskTitleLabel = document.createElement('label');
      taskTitleLabel.classList.add('taskTitleLabel');
      taskTitleLabel.setAttribute('for', 'taskTitleInput');
      taskTitleLabel.innerHTML = 'Task:'
  
      const taskTitleInput = document.createElement('input');
      taskTitleInput.setAttribute('id', 'taskTitleInput');
      taskTitleInput.setAttribute('type', 'text');
  
      const descriptionContainer = document.createElement('div');
      descriptionContainer.classList.add('descriptionContainer', 'formItem');
  
      const descriptionLabel = document.createElement('label');
      descriptionLabel.classList.add('descriptionLabel');
      descriptionLabel.setAttribute('for', 'descriptionInput');
      descriptionLabel.innerHTML = 'Description:'
  
      const descriptionInput = document.createElement('input');
      descriptionInput.setAttribute('id', 'descriptionInput');
      descriptionInput.setAttribute('type', 'text');
  
      const dueContainer = document.createElement('div');
      dueContainer.classList.add('dueContainer', 'formItem');
  
      const dueLabel = document.createElement('label');
      dueLabel.classList.add('dueLabel');
      dueLabel.setAttribute('for', 'dueInput');
      dueLabel.innerHTML = 'Due:'
  
      const dueInput = document.createElement('input');
      dueInput.setAttribute('id', 'dueInput');
      dueInput.setAttribute('type', 'text');
  
      const priorityContainer = document.createElement('div');
      priorityContainer.classList.add('priorityContainer', 'formItem');
  
      const priorityLabel = document.createElement('label');
      priorityLabel.classList.add('priorityLabel');
      priorityLabel.setAttribute('for', 'priorityInput');
      priorityLabel.innerHTML = 'Priority:'
  
      const priorityInput = document.createElement('input');
      priorityInput.setAttribute('id','priorityInput');
      priorityInput.setAttribute('type', 'text');
      
      const addTaskBtnContainer = document.createElement('div');
      addTaskBtnContainer.classList.add('addTaskBtnContainer', 'formItem');

      const currentProj = document.createElement('button')
      currentProj.innerHTML = 'consoleLog: current project'
      currentProj.addEventListener('click', event => {
        console.log('current project:')
        console.log(projectStuff.currentProject)
        projectStuff.currentProject
      })
  
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
              taskForm.appendChild(formContainer);
              formContainer.appendChild(ddContainer)
                ddContainer.appendChild(myList)
                ddContainer.appendChild(ddInput)
                formContainer.appendChild(taskTitleContainer)
                  taskTitleContainer.appendChild(taskTitleLabel);
                  taskTitleContainer.appendChild(taskTitleInput)
                formContainer.appendChild(descriptionContainer);
                  descriptionContainer.appendChild(descriptionLabel);
                  descriptionContainer.appendChild(descriptionInput);
                formContainer.appendChild(dueContainer);
                  dueContainer.appendChild(dueLabel);
                  dueContainer.appendChild(dueInput);
                formContainer.appendChild(priorityContainer);
                  priorityContainer.appendChild(priorityLabel);
                  priorityContainer.appendChild(priorityInput);
                formContainer.appendChild(currentProj)
                formContainer.appendChild(addTaskBtnContainer);
                  addTaskBtnContainer.appendChild(addTaskBtn);}
      return formOverlay
    },
  on() {
    
    formOverlay.style.display = "block";
  },
  off() {
    document.getElementById("formOverlay").style.display = "none";
  }  
}



              
export { DOM, Form}
