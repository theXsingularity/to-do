import { displayTasks } from './display';
import { Form, DOM } from './layout';
import './style.css';

content.appendChild(DOM.header()) 
content.appendChild(DOM.mainContent())
content.appendChild(Form.createForm())
displayTasks();
let searchBar = document.getElementById('search')


