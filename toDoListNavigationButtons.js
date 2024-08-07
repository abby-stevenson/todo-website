//adds an event listener for when the window is completly loaded 
window.addEventListener('load', () => {
    //retrieves the tasks from local storage and stores it in a constant
    const todaysToDoListHTML = localStorage.getItem('toDoListTasks');
    //if soemthing was returned
    if (todaysToDoListHTML) {
        //displays what was returned on the page
        document.getElementById('toDoListTasks').innerHTML = todaysToDoListHTML;
        //creates a reference to the element where the todo list is displayed
        var resultDiv = document.getElementById('toDoList');
        //creates a empty list to store the descriptions
        const descriptions = [];
        //stores all the events on the page in a constant 
        const allEvents = document.querySelectorAll('.event');
        //loops through all the events
        allEvents.forEach(eventElement => {
            //isolates the description from the current event
            const descriptionElement = eventElement.querySelector('.description');
            //if the desription exits
            if (descriptionElement) {
                //adds the text content of the description to the list without any surrounding whitespace
                descriptions.push(descriptionElement.textContent.trim());
            }
        });
        //loops through all the descriptions and displays them each on a new line 
        descriptions.forEach((description) => {
            resultDiv.innerHTML += `<li><input type="checkbox"> ${description} </li>`;
                });
    } 
    else {
        //displays a message if there were no tasks in the local storage
        document.getElementById('toDoListTasks').innerHTML = `<label> No Tasks For Today </label>`
    }
});

//removes all the tasks from the page
function clearTodaysTasks() {
    localStorage.removeItem('toDoListTasks');
    document.getElementById('toDoListTasks').innerHTML = "";
}

//adds an event listener for when the page is loaded aside from any images
document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.getElementById('clearTodaysTasksTDL');
    //if the clear button exists
    if (button) {
        //adds an event listener to the button so that when it is clicked it clears the tasks
        button.addEventListener('click', clearTodaysTasks);
    }
});


