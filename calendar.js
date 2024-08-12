//Sets todays date and sets the values for todays month and year
let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

//generates the initial calendar
generateCalendar(curr_month.value, curr_year.value)

//function to generate the calendar of a given month in a given year
function generateCalendar(month, year) {

    //gives all the relevent html elements references
    let calendar = document.querySelector('.calendar')
    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')
    let calendar_header_month = calendar.querySelector('#month')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    calendar_days.innerHTML = ''

    let currDate = new Date()

    //adjusts the month and year if they arent provided or arent valid
    if (month > 11 || month < 0) {
        month = currDate.getMonth()
    }
    if (!year) {
        year = currDate.getFullYear()
    }

    //sets the headers of the calendar
    let curr_month = `${month_names[month]}`
    calendar_header_month.innerHTML = curr_month
    calendar_header_year.innerHTML = year
    
    let first_day = new Date(year, month, 1)

    //creates the necessary elements to display the days on the calendar
    //makes sure the loop runs for the nesseccary days taking into account if the month starts midweek so a grid is created 
    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        //the div element to represent the day
        let day = document.createElement('div')
        //checks i is greater than the first day of the month to ensure that there are empty squares generated at the start
        if (i >= first_day.getDay()) {
            //adds a class to the days that arent empty so that it can be styled
            day.classList.add('calendar-day-hover')
            //determines the date to be displayed on the square and sets it to display this
            day.innerHTML = i - first_day.getDay() + 1
            //checks if each part of the date matches today's date
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                //adds a class to this square for stylin purposes (so that it can be highlighted as the current date)
                day.classList.add('curr-date')
            }
        }
        //adds the new div to the calendar days div
        calendar_days.appendChild(day)
    }
}

//determines if a given year is a leap year 
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

//returns the number of days in Feburuary on a given year
function getFebDays(year) {
    if (isLeapYear(year)) {
        return 29;
    }
    else {
        return 28;
    }
}

//decreases the month index by 1
function previousMonth() {
    if (curr_month.value === 0) {
        curr_month.value = 11
        --curr_year.value
    } else {
        --curr_month.value
    }
    generateCalendar(curr_month.value, curr_year.value)
}

//increases the month index by 1
function nextMonth() {
    if (curr_month.value === 11) {
        curr_month.value = 0
        ++curr_year.value
    } else {
        ++curr_month.value
    }
    generateCalendar(curr_month.value, curr_year.value)
}

//decreases the year index by 1
function previousYear() {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

//increases the year index by 1
function nextYear() {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

//clears the tasks on the calendar page and in the local storage
function clearTodaysTasks() {
    localStorage.removeItem('toDoListTasks');
    document.getElementById('mainPageTasks').innerHTML = "";
}

//adds an event listener for when the dom content is fully loaded
document.addEventListener('DOMContentLoaded', (event) => { 
    //sets references for all the buttons on the page 
    const clearButton = document.getElementById('clearTodaysTasksMP');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const prevYearButton = document.getElementById('prev-year');
    const nextYearButton = document.getElementById('next-year');
    //if the button exists on the current page
    if (clearButton) {
        //adds an event listener so when the clear button is pressed it runs the clearTodaysTasks function
        clearButton.addEventListener('click', clearTodaysTasks);
    }
    if (prevMonthButton) {
        //adds an event listener so when the clear button is pressed it runs the previous month function
        prevMonthButton.addEventListener('click', previousMonth);
    }
    if (nextMonthButton) {
        //adds an event listener so when the clear button is pressed it runs the next month function
        nextMonthButton.addEventListener('click', nextMonth);
    }
    if (prevYearButton) {
        //adds an event listener so when the clear button is pressed it runs the previous year function
        prevYearButton.addEventListener('click', previousYear);
    }
    if (nextYearButton) {
        //adds an event listener so when the clear button is pressed it runs the next year function
        nextYearButton.addEventListener('click', nextYear);
    }
});

//adds an event listener for when the page is fully loaded to load the tasks stored in local storage back onto the page
//or a message saying that there are no tasks for the day
window.addEventListener('load', () => {
    const todaysToDoListHTML = localStorage.getItem('toDoListTasks');
    if (todaysToDoListHTML) {
        document.getElementById('mainPageTasks').innerHTML = todaysToDoListHTML;
    } else {
        document.getElementById('mainPageTasks').innerHTML = `<label> No Tasks For Today </label>`
    }
});