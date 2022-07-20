import{ DOM } from './DOM'


//project factory
class Project {
  constructor(name) {
    this.name = name
    this.displayed = false
    this.rmvBtnTog = false
  }
}


//creating inbox




const projectStuff = {
  myProjects: [],
  currentProject: '',
  createInbox: function() {
    const inbox = new Project('inbox')
    projectStuff.myProjects.push(inbox)
    inbox.displayed = true
    projectStuff.changeProject(inbox)
  },
  changeProject: function(item) {
    projectStuff.currentProject = item
    console.log(projectStuff.currentProject)
    console.log('ran changeProject()')
  }
}
projectStuff.createInbox(); // how to make this into self-invoking function?





function addNewProject () {
    let project = new Project(prompt('whats your project?'))
    projectStuff.myProjects.push(project);
    
    DOM.appendProject()
    DOM.addProjLinks()
    DOM.rmvProjItems()
}


export {addNewProject, projectStuff}

