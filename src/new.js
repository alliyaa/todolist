
import './style.css';
export function createNewProject() {
    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('newContainer');

    const mainDiv = document.querySelector('main');

    // Function to create editable part with label
    function createEditablePart(labelText) {
        const container = document.createElement('div');

        const label = document.createElement('span');
        label.textContent = labelText + ": ";
        container.appendChild(label);

        const editable = document.createElement('div');
        editable.contentEditable = true;
        container.appendChild(editable);

        return { container, editable };
    }

    // Create editable and non-editable parts for each project detail
    const projectName = createEditablePart('Project Name');
    const projectPriority = createEditablePart('Priority');
    const projectDate = createEditablePart('Date');
    const projectNotes = createEditablePart('Notes');

    // Append editable parts to the newProjectContainer
    newProjectContainer.appendChild(projectName.container);
    newProjectContainer.appendChild(projectPriority.container);
    newProjectContainer.appendChild(projectDate.container);
    newProjectContainer.appendChild(projectNotes.container);

    const savebtn = document.createElement('button');
    savebtn.classList.add('saveTask');
    savebtn.innerHTML += "Save";
    newProjectContainer.appendChild(savebtn);

    mainDiv.appendChild(newProjectContainer);

    // Update display elements when input fields change
    projectName.editable.addEventListener('input', () => {
        displayProjectName.textContent = projectName.editable.textContent;
    });
    projectPriority.editable.addEventListener('input', () => {
        displayProjectPriority.textContent = projectPriority.editable.textContent;
    });
    projectDate.editable.addEventListener('input', () => {
        displayProjectDate.textContent = projectDate.editable.textContent;
    });
    projectNotes.editable.addEventListener('input', () => {
        displayProjectNotes.textContent = projectNotes.editable.textContent;
    });

    // Display elements for the project details
    const displayProjectName = document.createElement('div');
    const displayProjectPriority = document.createElement('div');
    const displayProjectDate = document.createElement('div');
    const displayProjectNotes = document.createElement('div');

    mainDiv.appendChild(displayProjectName);
    mainDiv.appendChild(displayProjectPriority);
    mainDiv.appendChild(displayProjectDate);
    mainDiv.appendChild(displayProjectNotes);

    savebtn.addEventListener('click', () => {
        projectName.editable.textContent = "";
        projectPriority.editable.textContent = "";
        projectDate.editable.textContent = "";
        projectNotes.editable.textContent = "";
    });
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




