let daySelected = '2024/03/21';
const other = document.getElementById('opt5');
const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const select = document.getElementById('dayOptions');
const back = document.getElementById('back-button');
const otherday = document.getElementById('other-select');
otherday.style.display = 'none';
back.style.display = 'none';


function countDown(){
    const newYearDate = new Date(daySelected);
    const currentDate = new Date();

    // Configurar la fecha objetivo sin el año
    newYearDate.setFullYear(currentDate.getFullYear());

    // Verificar si la fecha objetivo ya ha pasado en el año actual
    if (currentDate > newYearDate) {
        newYearDate.setFullYear(currentDate.getFullYear() + 1);
    }

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(min);
    secsEl.innerHTML = formatTime(secs);
}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
function updateCountdown() {
    countDown();
}

select.addEventListener('change', () => {
    switch (select.value) {
        case 'Halloween':
            daySelected = '2024/10/31';
            break;
        case 'Christmas':
            daySelected = '2024/12/25';
            break;
        case 'Easter':
            daySelected = '2024/03/31';
            break;
        case 'New Year':
            daySelected = '2024/01/01';
            break;
        case 'Other':
            select.style.display = 'none';
            otherday.style.display = 'flex';
            return; // Exit the function to avoid calling countDown(daySelected)
        default:
            break;
    }

    updateCountdown();
});

back.addEventListener('click', ()=>{
    select.style.display = 'flex';
    otherday.style.display = 'none';  
})

updateCountdown();
setInterval(() => updateCountdown(), 1000);