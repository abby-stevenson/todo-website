//retrieves the values inputted into to the form and updates the to do list
function retrieveAddTaskToDoList() {
    //gets the value from the form
    var title = $("[name='title']").val();
    //ensures the user has entered a description
    if (title == '') {
        alert("Description is empty");
    }
    else {
        var resultDiv = '';
        //checks that there are tasks stored
        if(localStorage.getItem("toDoListNoTime") != null) {
            //stores these tasks in a variable
           resultDiv = localStorage.getItem("toDoListNoTime");
        }
        //adds the new task to the list
        resultDiv += `<li><input type="checkbox"> <span class = "title">${title} </span> </li>`;
        //stores all the tasks along with the new task in local storage
        localStorage.setItem("toDoListNoTime", resultDiv);                         
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

