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
        //if this element exists
        if (resultDiv) {
            //gets the list from local storage
            const list = localStorage.getItem("toDoListNoTime");
            //if the list is not null
            if (list) {
                //sets the list to be displayed in the results element
                resultDiv.innerHTML = list;
            }
            else {
                //displays a message if there were no tasks in the local storage
                document.getElementById('toDoList').innerHTML = `<label> No Tasks For Today </label>`
            }
        }
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

//removes all the tasks from the to do list
function clearToDoList() {
    localStorage.removeItem('toDoListNoTime');
    document.getElementById('toDoList').innerHTML = "";
}

function deleteEventFromTodaysTasks() {
    //retrieves the information on the page
    const todaysToDoListHTML = document.getElementById('toDoListTasks').innerHTML;
    //update local storage to reflect what is on the page
    localStorage.setItem('toDoListTasks', todaysToDoListHTML);

}

function deleteEventFromToDoList() {
    //retrieves the information on the page
    const todaysToDoListHTML = document.getElementById('toDoList').innerHTML;
    //update local storage to reflect what is on the page
    localStorage.setItem("toDoListNoTime", todaysToDoListHTML);

}


//adds an event listener for when the page is loaded aside from any images
document.addEventListener('DOMContentLoaded', (event) => {  
    const todaysTasksClearButton = document.getElementById('clearTodaysTasksTDL');
    const todoListClearButton = document.getElementById('clearTodaysTasksList');
    //if the clear button exists
    if (todaysTasksClearButton) {
        //adds an event listener to the button so that when it is clicked it clears the tasks
        todaysTasksClearButton.addEventListener('click', clearTodaysTasks);
    }
    //if the clear to do list button exists
    if (todoListClearButton) {
        //adds an event listener to the button so that when it is clicked it clears the tasks
        todoListClearButton.addEventListener('click', clearToDoList);
    }

    //adds an event listener for a seconday click to the today's task frame 
    document.getElementById('toDoListTasks').addEventListener('contextmenu', (event) => {
        //prevents the default context menu from showing up 
        event.preventDefault();
        // Check if the clicked element is an event or inside one
        const eventElement = event.target.closest('.event');
        //if the event element exists
        if (eventElement) {
            //removes the event 
            eventElement.remove();
            //calls the method to update the storage to fully delete the event
            deleteEventFromTodaysTasks();
        }
    });

     //adds an event listener for a secondary click to the today's task frame 
     document.getElementById('toDoList').addEventListener('contextmenu', (event) => {
        //prevents the default context menu from showing up 
        event.preventDefault();
        // Check if the clicked element is an event or inside one
        const eventElement = event.target.closest('li');
        //if the event element exists
        if (eventElement) {
            //removes the event 
            eventElement.remove();
            //calls the method to update the storage to fully delete the event
            deleteEventFromToDoList();
        }
    });
});


