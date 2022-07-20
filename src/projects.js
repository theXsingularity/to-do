import{ DOM } from './DOM'

const myProjects = []

class Project {
    constructor(name) {
      this.name = name
      this.displayed = false
      this.rmvBtnTog = false
    }
  }
  
const inbox = new Project('inbox')
//myProjects.push(inbox)
inbox.displayed = true

let currentProject = myProjects[0]


function addNewProject () {
    let project = new Project(prompt('whats your project?'))
    myProjects.push(project);
    
    DOM.appendProject()
    DOM.addProjLinks()
    DOM.rmvProjItems()
}



export {addNewProject, myProjects, currentProject}

