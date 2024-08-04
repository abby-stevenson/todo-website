window.addEventListener('load', () => {
    const todaysToDoListHTML = localStorage.getItem('toDoListTasks');
    if (todaysToDoListHTML) {
        document.getElementById('toDoListTasks').innerHTML = todaysToDoListHTML;
    } else {
        console.error('No To-Do List data found in localStorage');
    }
});

function clearTodaysTasks() {
    localStorage.clear();
    document.getElementById('toDoListTasks').innerHTML = "";
}

//adds the event listener
document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.getElementById('clearTodaysTasksTDL');
    if (button) {
        button.addEventListener('click', clearTodaysTasks);
    }
});