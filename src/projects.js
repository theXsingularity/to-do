import { testTask1, testTask2 } from './display'
import{ DOM } from './DOM'


//project factory
class Project {
  constructor(name) {
    this.name = name
    this.displayed = false
    this.rmvBtnTog = false
    this.tasks =[]
  }
}

const projectStuff = {
  myProjects: [],
  currentProject: '',
  changeCurrentProject: function(item) {
    projectStuff.currentProject = item
  },
  createInbox: function() {
    const inbox = new Project('inbox')
    projectStuff.myProjects.push(inbox)
    inbox.displayed = true
    projectStuff.changeCurrentProject(inbox)
    console.log(this.currentProject)
  },
  addNewProject: function () {
    let project = new Project(prompt('whats your project?'))
    projectStuff.myProjects.push(project);
    projectStuff.changeCurrentProject(project)
    console.log(projectStuff.currentProject)
    DOM.appendProject()
    console.log(projectStuff.myProjects)
  }
}
projectStuff.createInbox(); // how to make this into self-invoking function?




export { projectStuff}

