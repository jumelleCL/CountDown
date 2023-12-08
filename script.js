let daySelected = '2024/03/21';
const other = document.getElementById('opt5');
const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const fondoSelect = document.getElementById('counter');
const numbers =  document.getElementsByClassName('big-text');
const text = document.getElementsByClassName('text');
const colores = ['#f00', '#0f0', '#00f'];

let gradient = 'repeating-radial-gradient(circle at 10% 10%, transparent, transparent 5px, ';
for (let i = 0; i < colores.length; i++) {
    gradient += colores[i] + ' 5px, ' + colores[i] + ' 10px, ';
}
gradient = gradient.slice(0, -2) + ')';


const select = document.getElementById('dayOptions');
const back = document.getElementById('back-button');
const otherday = document.getElementById('other-select');
const dayInput = document.getElementById('day-select');
otherday.style.display = 'none';


// Function to know how many days, hours and seconds are left until the day selected
function countDown() {
    const currentDate = new Date();
    let newYearDate;

    if (select.value === 'Other') {
        newYearDate = new Date(dayInput.value);

        if (newYearDate < currentDate) {
            newYearDate.setFullYear(newYearDate.getFullYear() + 1);
        }
    } else {
        newYearDate = new Date(daySelected);
        newYearDate.setFullYear(currentDate.getFullYear());

        if (currentDate > newYearDate) {
            newYearDate.setFullYear(currentDate.getFullYear() + 1);
        }
    }

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const positiveTotalSeconds = Math.abs(totalSeconds);

    const days = Math.floor(positiveTotalSeconds / 3600 / 24);
    const hours = Math.floor(positiveTotalSeconds / 3600) % 24;
    const min = Math.floor(positiveTotalSeconds / 60) % 60;
    const secs = Math.floor(positiveTotalSeconds) % 60;

    dayEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(min);
    secsEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// Event to change the style in base of which day is selected
select.addEventListener('change', () => {
    switch (select.value) {
        case 'Halloween':
            daySelected = '2024/10/31';
            fondoSelect.style.backgroundImage = 'url("https://images.pexels.com/photos/619418/pexels-photo-619418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
            for (let i = 0; i < numbers.length; i++) {
                numbers[i].style.color = 'white';
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color= 'white';
            }
            break;
        case 'Christmas':
            daySelected = '2024/12/25';
            fondoSelect.style.backgroundImage = "url('https://images.pexels.com/photos/241820/pexels-photo-241820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
            for (let i = 0; i < numbers.length; i++) {
                numbers[i].style.color = 'red';
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color= 'green';
            }
            break;
        case 'Easter':
            daySelected = '2024/03/31';
            fondoSelect.style.backgroundImage = "url('https://images.pexels.com/photos/6897341/pexels-photo-6897341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
            for (let i = 0; i < numbers.length; i++) {
                numbers[i].style.color = 'darksalmon';
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = 'black';
            }
            break;
        case 'New Year':            
            daySelected = '2024/01/01';
            fondoSelect.style.backgroundImage ='url("https://images.pexels.com/photos/634688/pexels-photo-634688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
            for (let i = 0; i < numbers.length; i++) {
                numbers[i].style.color = 'white';
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = 'white';
            }
            break;
        case 'Epiphany':
            daySelected = '2024/01/06';
            fondoSelect.style.backgroundImage = 'url("https://images.pexels.com/photos/327472/pexels-photo-327472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
            for (let i = 0; i < numbers.length; i++) {
                numbers[i].style.color = 'white';
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = 'white';
            }
            break;
        case 'Valentines':
            daySelected = '2024/02/14';
            fondoSelect.style.backgroundImage = 'url("https://images.pexels.com/photos/1447367/pexels-photo-1447367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
            for (let i = 0; i < numbers.length; i++) {
                numbers[i].style.color = 'firebrick';
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = 'white';
            }
            break;
        case 'Other':
            select.style.display = 'none';
            otherday.style.display = 'flex';
            fondoSelect.style.backgroundImage = 'url("https://static.vecteezy.com/system/resources/thumbnails/019/167/032/original/beautiful-fresh-snow-patterns-winter-background-close-up-texture-selective-focus-and-shallow-dof-backcountry-skiing-after-in-powder-day-free-video.jpg")';
            for (let i = 0; i < numbers.length; i++) {
                numbers[i].style.color = 'black';
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = 'black';
            }
            return; 
        default:
            break;
    }

    countDown();
});

back.addEventListener('click', ()=>{
    select.style.display = 'flex';
    otherday.style.display = 'none';  
})

dayInput.addEventListener('change', () => {
    const selectedDate = dayInput.value;
    daySelected = selectedDate;
    countDown();
});



countDown();
setInterval(() => countDown(), 1000);