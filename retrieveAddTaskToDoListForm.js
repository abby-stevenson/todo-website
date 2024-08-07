//retrieves the values inputted into to the form and updates the to do list to show the new task in chronological order
function retrieveAddTaskToDoList() {
    //gets the value from the form
    var title = $("[name='title']").val();
    var time = $("[name='time']").val();
    //ensures the user has entered a description
    if (title == '') {
        alert("Description is empty");
    }
    //ensures the user has entered a time
    if (time == '') {
        alert("Time is empty");
    }
    else {
        //gets the current list of tasks on the page
        var resultDiv = document.getElementById('tasks');
        //adds the new task to the list
        resultDiv.innerHTML += `<span class = "event"> 
                                    <span class = "timing"> ${time} </span> 
                                    <i class="fa fa-arrow-right"></i> 
                                    <span class = "description">${title} </span>
                                    </span> <br>`;
        //creates a list of just times to be sorted
        const timings = [];
        //stores all the events on the page (including the new one) in a constant
        const allEvents = document.querySelectorAll('.event');
        //loops through all the events 
        allEvents.forEach(eventElement => {
            //isolates the time from the element
            const timingElement = eventElement.querySelector('.timing');
            //if the timing element exists
            if (timingElement) {
                //adds the text version of the time element (without any surrounding whitespaces)
                //to the complete array with all the times
                timings.push(timingElement.textContent.trim());
            }
        });
        //resets the results page to be blank (so it doesnt duplicate)
        resultDiv.innerHTML = '';
        //sorts the times
        timings.sort((a, b) => {
            //sets the time to a random date so the times can be sorted as dates 
            const timeA = new Date(`1970-01-01T${a}:00Z`);
            const timeB = new Date(`1970-01-01T${b}:00Z`);
            return timeA - timeB;
        });
        //loops through each of the times
        timings.forEach((time) => {
            // Finds the corresponding event element 
            //Loops through all the events
            allEvents.forEach(eventElement => {
                //isolates the time from the current event
                const timingElement = eventElement.querySelector('.timing');
                //checks if both the current time element and the time of the current event
                if (timingElement && timingElement.textContent.trim() === time) {
                    //adds the html of the event element to the page so that it can be displayed
                    resultDiv.innerHTML += eventElement.outerHTML + '<br>';
                }
            });
        });
    }
}

//adds an event listener for when the page is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.getElementById('btnAddTaskToDoList');
    //if the button exists
    if (button) {
        //adds the event listener so that if the button is clicked it retrieves the tasks
        button.addEventListener('click', retrieveAddTaskToDoList);
    } 
});

