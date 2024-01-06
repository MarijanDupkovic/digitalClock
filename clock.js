let hours = 0;
let minutes = 0;
let seconds = 0;
let colorIndex = 0;


function init() {
    setInterval(updateClock, 1000);
    setInterval(changeColor, 5000);
    animate();

}
function animate() {
    document.getElementById("border").classList.add("animate");
    setTimeout(function () {
        document.getElementById("border").classList.remove("animate");
        document.getElementById("border").classList.add("animateReverse");
    }, 60000);
    animate();
}

function updateClock() {
    setHour();
    setMinutes();
    setSeconds();
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
}

function changeColor() {
    let neonColors = ['#39FF14', '#FF073A', '#FE4164', '#FFD700', '#1B03A3', '#08F7FE', '#FE53BB', '#F5D300','#FF5733', '#FFC300', '#DAF7A6', '#FFC0CB', '#7DFF33', '#33FF57', '#33FFC5', '#33B5FF', '#3342FF', '#8233FF', '#E833FF', '#FF33A2'];
    document.getElementById('clock').style.color = neonColors[colorIndex];
    colorIndex = (colorIndex + 1) % neonColors.length;
    document.getElementById('clock').style.color = neonColors[colorIndex];
}

function setSeconds() {
    seconds = new Date().getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
}

function setMinutes() {
    minutes = new Date().getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
}


function setHour() {
    hours = new Date().getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
}


