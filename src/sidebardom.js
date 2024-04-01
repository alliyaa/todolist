import './style.css';

export function sidebardom()
{
   
    const sidebarM = document.createElement('div');
    const sidebar = document.querySelector('.sidebar');
    sidebar.appendChild(sidebarM);


    function SidebarContent() {
    const SidebarContent = document.createElement('div');


    const todayLink = document.createElement('div');
    todayLink.textContent = "Today";
    SidebarContent.appendChild(todayLink);


    const thisWeekLink = document.createElement('div');
    thisWeekLink.textContent = "This week";
    SidebarContent.appendChild(thisWeekLink);

    const projectsLink = document.createElement('div');
    projectsLink.textContent = "Projects";
    SidebarContent.appendChild(projectsLink);

    todayLink.classList.add('SideBarContent');
    thisWeekLink.classList.add('SideBarContent');
    projectsLink.classList.add('SideBarContent');
    return SidebarContent;

    }
   

    
    
    function addButton(){
    
        const addnewButton = document.createElement('button');
        addnewButton.innerHTML+= "New";
        addnewButton.classList.add('addnewButton');
        return addnewButton;
      
    }

    sidebarM.appendChild(SidebarContent());
    sidebarM.appendChild(addButton());
    sidebar.appendChild(sidebarM);
    
  

    return sidebar;
}