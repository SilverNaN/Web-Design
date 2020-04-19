// obtain the button from html
const addBtn = document.getElementById('addButton');
const clearBtn = document.getElementById('clearButton');
// obtain the target task list ul, we will need to interact and change the content of it.
const taskList = document.querySelector('.taskListWrapper ul');
// The template li element
const templateList = document.querySelector('.templateList');
// obtain the user specified task content.
const addTaskValue = document.querySelector('.addTask input');

/*
When a task in the task list is clicked, we will detect the ul and use event.target to obtain the clicked item.
Since the item should be the components of the li, the parent item will be the li item.
Change the class of the li to other states and change the icon if necessary.
*/
taskList.addEventListener('click', (event) => {
    if (event.target.tagName == 'INPUT' || event.target.tagName == 'LABEL') {
        // obtain the clicked item's parent li.
        selectListItem = event.target.parentElement;
        if (selectListItem.className == 'activeItem') {
            selectListItem.className = 'completeItem';
            // Change the icon.
            const activeIcon = selectListItem.querySelector('label');
            activeIcon.innerHTML = '&#10004';
        }
        else {
            selectListItem.className = 'activeItem';
            const activeIcon = selectListItem.querySelector('label');
            activeIcon.innerHTML = '&#10065';
        }
    }
});

// Add a function to the task input component, when press Enter, the new task is input to the list.
addTaskValue.addEventListener('keyup', event => {
    if (event.keyCode ==13){
        addTask(addTaskValue.value);
        addTaskValue.value = '';
    }
});
// Add a function to the add button
addBtn.addEventListener('click', event => {
    addTask(addTaskValue.value);
    addTaskValue.value = '';
});
// find all li with completeItem class and iteratively remove them.
clearBtn.addEventListener('click', event => {
    const finishedTask = document.querySelectorAll('.completeItem');
    for (let i = 0; i < finishedTask.length; i++) {
        finishedTask[i].remove();
    }
});

//complete: &#10004 active: &#10065
function addTask(taskName) {
    // Use templateList.content.querySelector to select the component of the template.
    const taskElement = document.importNode(templateList.content.querySelector('.taskItem'), true);
    // Assign the class name
    taskElement.className = 'activeItem';
    // Select the components from the list.
    const activeItem = taskElement.querySelector('input');
    const activeIcon = taskElement.querySelector('label');
    // Change the icon and text.
    activeIcon.innerHTML = '&#10065';
    activeItem.value = taskName;
    // Append to ul
    taskList.appendChild(taskElement);
}