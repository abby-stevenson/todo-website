//adds an event listener for when the page is fully loaded
window.addEventListener('load', () => {
    //gets the tasks stored in the local storage and stores them in a constant
    const todaysToDoListHTML = localStorage.getItem('toDoListTasks');
    //if the value from the storage wasnt null
    if (todaysToDoListHTML) {
        //displays the list of tasks on this page
        document.getElementById('tasks').innerHTML = todaysToDoListHTML;
    } else {
        //displays a message 
        document.getElementById('tasks').innerHTML = `<label> No Tasks For Today </label>`
    }
});

//stores the list of tasks in local storage when the page is exited
function loadToDoList() {
    const todaysToDoListHTML = document.getElementById('tasks').innerHTML;
    localStorage.setItem('toDoListTasks', todaysToDoListHTML);
    window.location.href = 'toDoList.html';
}

//adds the event listener for when the page is loaded aside from images and subframes
document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.getElementById('backToToDoList');
    //if the button exists on the page
    if (button) {
        //adds an event listener that if the button is clicked the loadToDoList function will run
        button.addEventListener('click', loadToDoList);
    }
});