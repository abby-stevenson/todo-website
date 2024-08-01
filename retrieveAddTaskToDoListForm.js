function retrieveAddTaskToDoList() {
    var title = $("[name='title']").val();
    var time = $("[name='time']").val();
    var resultDiv = document.getElementById('tasks');
    resultDiv.innerHTML += `<span id = "event"> <span id = "timing"> ${time} </span> <i class="fa fa-arrow-right"></i> ${title} </span> <br>`;
    const spans = document.querySelectorAll('#tasks span');
    const spanContents = Array.from(spans).map(span => timingSpan.textContent);
    resultDiv.innerHTML = '';
    spanContents.sort();
    spanContents.forEach((content, index) => {
        spans[index].textContent = content;
        resultDiv.innerHTML += content;
    });


}

document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.getElementById('btnAddTaskToDoList');
    button.addEventListener('click', retrieveAddTaskToDoList);
});
