let hours = 0;
let minutes = 0;
let seconds = 0;
let colorIndex = 0;
let changeBorderTimer = 60000;


function init() {
    setInterval(updateClock, 1000);
    setInterval(changeColor, 5000);
    document.getElementById('border').classList.add('animate');

}


function updateClock() {
    setHour();
    setMinutes();
    setSeconds();
    drawClock();
}

function changeColor() {
    let neonColors = ['#39FF14', '#FF073A', '#FE4164', '#FFD700', '#1B03A3', '#08F7FE', '#FE53BB', '#F5D300','#FF5733', '#FFC300', '#DAF7A6', '#FFC0CB', '#7DFF33', '#33FF57', '#33FFC5', '#33B5FF', '#3342FF', '#8233FF', '#E833FF', '#FF33A2'];
    document.getElementById('clock').style.color = neonColors[colorIndex];
    colorIndex = (colorIndex + 1) % neonColors.length;
}

function setSeconds() {
    seconds = new Date().getSeconds();
    seconds = checkTime(seconds);
}

function setMinutes() {
    minutes = new Date().getMinutes();
    minutes = checkTime(minutes);
}

function setHour() {
    hours = new Date().getHours();
    hours = checkTime(hours);
}

function checkTime(i) {
    if (i < 10) i = '0' + i;
    return i;
}

function drawClock() {
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
