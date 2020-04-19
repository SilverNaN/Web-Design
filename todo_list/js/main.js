const addBtn = document.getElementById('addButton');
const taskList = document.querySelector('.taskListWrapper ul');
const templateList = document.querySelector('.templateList');
const addTaskValue = document.querySelector('.addTask input');
const clearBtn = document.getElementById('clearButton');

taskList.addEventListener('click', (event) => {
    if (event.target.tagName == 'INPUT' || event.target.tagName == 'LABEL') {
        selectListItem = event.target.parentElement;
        if (selectListItem.className == 'activeItem') {
            selectListItem.className = 'completeItem';
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

console.log(taskList)
addBtn.addEventListener('click', event => {
    addTask(addTaskValue.value);
    addTaskValue.value = '';
});

clearBtn.addEventListener('click', event => {
    const finishedTask = document.querySelectorAll('.completeItem');
    for (let i = 0; i < finishedTask.length; i++) {
        finishedTask[i].remove();
    }
});

//complete: &#10004 active: &#10065
function addTask(taskName) {
    const taskElement = document.importNode(templateList.content.querySelector('.taskItem'), true);
    taskElement.className = 'activeItem';
    const activeItem = taskElement.querySelector('input');
    const activeIcon = taskElement.querySelector('label');
    activeIcon.innerHTML = '&#10065';
    activeItem.value = taskName;
    taskList.appendChild(taskElement);
}