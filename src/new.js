
import './style.css';
export function createNewProject() {
    const newProjectContainer = document.createElement('div');

    const newProjectName = document.createElement('div');
    const mainDiv = document.querySelector('main');
    newProjectName.contentEditable='true';
    newProjectName.classList.add('newProjectDiv');
    newProjectContainer.appendChild(newProjectName);

      
    const newProjectPriority = document.createElement('div');
    newProjectPriority.contentEditable='true';
    newProjectPriority.classList.add('newProjectDiv');
    newProjectContainer.appendChild(newProjectPriority);

    const newProjectDate = document.createElement('div');
    newProjectDate.contentEditable='true';
    newProjectDate.classList.add('newProjectDiv');
    newProjectContainer.appendChild(newProjectDate);

    const newProjectNotes = document.createElement('div');
    newProjectNotes.contentEditable='true';
    newProjectNotes.textContent="noemsks";
    newProjectNotes.classList.add('newProjectDiv');
    newProjectContainer.appendChild(newProjectNotes);
    
    mainDiv.appendChild(newProjectContainer);
  

    const displayProjectName = document.createElement('div');
    const displayProjectPriority = document.createElement('div');
    const displayProjectDate = document.createElement('div');
    const displayProjectNotes = document.createElement('div');

   

    let project = new newProject(newProjectName, newProjectDate, newProjectPriority, newProjectNotes);

    // Update display elements when input fields change
    newProjectName.addEventListener('input', () => {
       
       project.title = newProjectName.textContent;
       displayProjectName.textContent = project.title;
       displayProjectDate.textContent;
       displayProjectPriority.textContent;
       displayProjectNotes.textContent;
    });
    newProjectPriority.addEventListener('input', () => {
       
        project.priority = newProjectPriority.textContent;
        displayProjectName.textContent;
        displayProjectPriority.textContent = project.priority;
        displayProjectDate.textContent;
        displayProjectNotes.textContent;
    });
    newProjectDate.addEventListener('input', () => {
        
       project.duedate = newProjectDate.textContent;
       displayProjectDate.textContent = project.duedate;
    });
    newProjectNotes.addEventListener('input', () => {
      
      project.notes = newProjectNotes.textContent;
      displayProjectNotes.textContent = project.notes;
    });
 
    mainDiv.appendChild(displayProjectName);
    mainDiv.appendChild(displayProjectPriority);
    mainDiv.appendChild(displayProjectDate);
    mainDiv.appendChild(displayProjectNotes);
}




class newProject{
constructor(title, duedate, priority, notes)
{
    this.title = title.textContent;
    this.duedate = duedate.textContent;
    this.priority = priority.textContent;
    this.notes = notes.textContent;

}
}




