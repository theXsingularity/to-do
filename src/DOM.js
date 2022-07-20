import { myProjects, currentProject } from './projects'

const DOM = {
    appendProject: function() {
        let newProject = myProjects.length-1
        let projectItemContainer = document.createElement('div')
        projectItemContainer.classList.add('projectItemContainer')

        let projectItem = document.createElement('button')
        projectItem.classList.add('projectItem')
        projectItem.innerHTML = (myProjects[newProject].name)
        projectItem.setAttribute("data-projLink", (myProjects.length-1))
        

        let projectRmvBtn = document.createElement('button')
        projectRmvBtn.innerHTML = '-'
        projectRmvBtn.classList.add('projectRmvBtn')
        projectRmvBtn.setAttribute("data-rmvBtn", (myProjects.length-1))
        
        listOfProjects.appendChild(projectItemContainer)
        projectItemContainer.appendChild(projectItem)
        projectItemContainer.appendChild(projectRmvBtn)

        let ddItem = document.createElement('option')
        ddItem.innerHTML = (myProjects[newProject].name)

        myList.appendChild(ddItem)
        
    },
    test: function() {
        return ('test')
    },
    addProjLinks: function() {
        const addBtn = document.querySelector(`[data-projLink="${myProjects.length-1}"]`);
        addBtn.addEventListener('click', event => {
            let attribute = event.target.getAttribute('data-projLink')
            console.log(myProjects[`${attribute}`])
            console.log('test 2')
            console.log(event.target.dataset);
        })
    },
    rmvProjItems: function() {
        const rmvBtn = document.querySelector(`[data-rmvBtn="${myProjects.length-1}"]`);
        rmvBtn.addEventListener('click', event => {
            let attribute = event.target.getAttribute('data-rmvBtn');
            let projectToRmv = document.querySelector(`[data-rmvBtn="${attribute}"]`)
            console.log(attribute)
            myProjects.splice(attribute,1);
            projectToRmv.parentElement.remove()
            
            //listOfProjects.removeChild(attribute)
            


        })
    }
}

function ddChange() {
    let mylist = document.getElementById("myList"); 
    let ddInput = document.getElementById('projectDDItems')
    ddInput.value = mylist.options[myList.selectedIndex].innerHTML;  
  }

              
        
        


export { DOM, ddChange}
