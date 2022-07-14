import { displayTasks } from './displayTasks';
import { formOverlay } from './formOverlay';
import { createHeader, mainContent } from './layout';
import './style.css';

content.appendChild(createHeader()) 
content.appendChild(mainContent())
content.appendChild(formOverlay)
displayTasks();


