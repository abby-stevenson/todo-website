window.addEventListener('load', () => {
    const todaysToDoListHTML = localStorage.getItem('toDoListTasks');
    if (todaysToDoListHTML) {
        document.getElementById('toDoListTasks').innerHTML = todaysToDoListHTML;
        var resultDiv = document.getElementById('toDoList');
        const descriptions = [];
        const allEvents = document.querySelectorAll('.event');
        allEvents.forEach(eventElement => {
            const descriptionElement = eventElement.querySelector('.description');
            if (descriptionElement) {
                descriptions.push(descriptionElement.textContent.trim());
            }
        });

        descriptions.forEach((description) => {
            resultDiv.innerHTML += `<li><input type="checkbox"> ${description} </li>`;
                });
    } else {
        document.getElementById('toDoListTasks').innerHTML = `<label> No Tasks For Today </label>`
        //console.error('No To-Do List data found in localStorage');
    }
});

function clearTodaysTasks() {
    localStorage.removeItem('toDoListTasks');
    document.getElementById('toDoListTasks').innerHTML = "";
}

//adds the event listener
document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.getElementById('clearTodaysTasksTDL');
    if (button) {
        button.addEventListener('click', clearTodaysTasks);
    }
});


