const newYear = '2024/01/01';
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

select.addEventListener('click', ()=> {
    select.addEventListener('change', ()=> {
        if (select.value === "Other") 
        {
            select.style.display = 'none';
            otherday.style.display = 'flex';
        }else{
            switch (select.value) {
                case value:
                    
                    break;
            
                default:
                    break;
            }
        }
    })
})

back.addEventListener('click', ()=>{
    select.style.display = 'flex';
    otherday.style.display = 'none';  
})


function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate)/ 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) %24;
    const min = Math.floor(totalSeconds/60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(min);
    secsEl.innerHTML = formatTime(secs);
}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
countDown();

setInterval(countDown, 1000);