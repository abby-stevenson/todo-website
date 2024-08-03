//retrieves the values inputted into to the form and updates the to do list to show the new task in chronological order
function retrieveAddTaskToDoList() {
    //gets the value from the form
    var title = $("[name='title']").val();
    var time = $("[name='time']").val();
    var resultDiv = document.getElementById('tasks');
    resultDiv.innerHTML += `<span class = "event"> <span class = "timing"> ${time} </span> <i class="fa fa-arrow-right"></i> ${title} </span> <br>`;
    //creates a list of just times to be sorted
    const timings = [];
    const allEvents = document.querySelectorAll('.event');
    allEvents.forEach(eventElement => {
        const timingElement = eventElement.querySelector('.timing');
        if (timingElement) {
            timings.push(timingElement.textContent.trim());
        }
    });
    //sets the time to a random date so they can be sorted as dates 
    resultDiv.innerHTML = '';
    timings.sort((a, b) => {
        const timeA = new Date(`1970-01-01T${a}:00Z`);
        const timeB = new Date(`1970-01-01T${b}:00Z`);
        return timeA - timeB;
    });
    timings.forEach((time) => {
        // Finds the corresponding event element
        allEvents.forEach(eventElement => {
            const timingElement = eventElement.querySelector('.timing');
            if (timingElement && timingElement.textContent.trim() === time) {
                resultDiv.innerHTML += eventElement.outerHTML + '<br>';
            }
        });
    });
}

//adds the event listener
document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.getElementById('btnAddTaskToDoList');
    button.addEventListener('click', retrieveAddTaskToDoList);
});

