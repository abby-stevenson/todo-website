window.addEventListener('load', () => {
    const todaysToDoListHTML = localStorage.getItem('toDoListTasks');
    if (todaysToDoListHTML) {
        document.getElementById('tasks').innerHTML = todaysToDoListHTML;
    } else {
        console.error('No To-Do List data found in localStorage');
    }
});

function loadToDoList() {
    console.log("Hi");
    console.log(todaysToDoListHTML);
    localStorage.setItem('toDoListTasks', todaysToDoListHTML);
    window.location.href = 'toDoList.html';
}

//adds the event listener
document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.getElementById('backToToDoList');
    if (button) {
        button.addEventListener('click', loadToDoList);
    }
});