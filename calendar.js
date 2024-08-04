let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

const generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')
    let calendar_header_month = calendar.querySelector('#month')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (month > 11 || month < 0) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    calendar_header_month.innerHTML = curr_month
    calendar_header_year.innerHTML = year
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-month').onclick = () => {
    if (curr_month.value === 0) {
        curr_month.value = 11
        --curr_year.value
    } else {
        --curr_month.value
    }
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-month').onclick = () => {
    if (curr_month.value === 11) {
        curr_month.value = 0
        ++curr_year.value
    } else {
        ++curr_month.value
    }
    generateCalendar(curr_month.value, curr_year.value)
}


document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

function clearTodaysTasks() {
    localStorage.clear();
    document.getElementById('mainPageTasks').innerHTML = "";
}

//adds the event listener
document.addEventListener('DOMContentLoaded', (event) => {  
    const button = document.getElementById('clearTodaysTasksMP');
    if (button) {
        button.addEventListener('click', clearTodaysTasks);
    }
});

window.addEventListener('load', () => {
    const todaysToDoListHTML = localStorage.getItem('toDoListTasks');
    if (todaysToDoListHTML) {
        document.getElementById('mainPageTasks').innerHTML = todaysToDoListHTML;
    } else {
        console.error('No To-Do List data found in localStorage');
    }
});