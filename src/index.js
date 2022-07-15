import { displayTasks } from './display';
import { Form, createHeader, mainContent } from './DOM-stuff';
import './style.css';

content.appendChild(createHeader()) 
content.appendChild(mainContent())
content.appendChild(Form.createForm())
displayTasks();


