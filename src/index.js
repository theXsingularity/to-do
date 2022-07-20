import { displayTasks } from './display';
import './style.css';
import { DOM, Form } from './DOM'


content.appendChild(DOM.header()) 
content.appendChild(DOM.mainContent())
content.appendChild(Form.createForm())
displayTasks();

