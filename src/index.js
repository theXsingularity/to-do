import {displayTasks} from './displayTasks';
import {createHeader, createSidebar} from './layout'
import './style.css';

/* ----- header ----- */

/* ----- content----- */
const contentContainer = document.createElement('div')
contentContainer.classList.add('contentContainer');
  
const taskDisplay = document.createElement('div')
taskDisplay.classList.add('taskDisplay');

contentContainer.appendChild(createSidebar())
contentContainer.appendChild(taskDisplay)


/* ----- appending tree ----- */
content.appendChild(createHeader()) 
content.appendChild(contentContainer)
displayTasks()

export { taskDisplay }
    

