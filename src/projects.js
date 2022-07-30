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
const inbox = new Project('inbox');
inbox.displayed = true;

const projectStuff = {
  myProjects: [inbox],
  currentProject: inbox,
  changeCurrentProject: function(item) {
    projectStuff.currentProject = item
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





export { projectStuff}

