window.addEventListener('load', () => {
    const todaysToDoListHTML = localStorage.getItem('toDoListTasks');
    if (todaysToDoListHTML) {
        document.getElementById('toDoListTasks').innerHTML = todaysToDoListHTML;
    } else {
        console.error('No To-Do List data found in localStorage');
    }
});