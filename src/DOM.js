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
        //const rmvProjectBtns = document.getElementsByClassName('projectRmvBtn')
       /*  for(let i=0; i<myProjects.length; i++) {
            if(myProjects[i].rmvBtnTog === false) {
              myProjects[i].rmvBtnTog = true;
              rmvProjectBtns[i].addEventListener('click', function(){
                let test = document.querySelector(`[data-attribute="${i}"]`)
                myProjects.splice(i,1); //works
                console.log(test.parentNode)
                console.log(listOfProjects)
                console.log(this.parentNode)
                listOfProjects.removeChild(test.parentNode) */
                /* 
                  listOfProjects.removeChild(this.parentNode)
                  console.log(myProjects)
                  console.log(rmvProjectBtns) */
              
        
        


export { DOM }
