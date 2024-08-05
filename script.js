var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('pause');
var resetBtn = document.getElementById('reset');
var lapBtn = document.getElementById('lap');
var laps = document.getElementById("laps");

var hour = document.getElementById('hours');
var minute = document.getElementById('minutes');
var second = document.getElementById('seconds');

var running = false;

startBtn.onclick = () => {
    if(!running){
        start();
    }
}
stopBtn.onclick = () => {
    if(running){
        stop();
    }
}
resetBtn.onclick = () => {
    if(running){
        stop();
    }
    reset();
}
lapBtn.onclick = () => {
    if(running){
        lap();
    }
}
function start() {
    running = true;
    incrementClock();
}
function stop() {
    running = false;
}
function reset() {
    running = false;
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
    laps.innerHTML = '';
}

function incrementClock() {
    if(running) {
    
    let hours = parseInt(hour.innerHTML);
    let minutes = parseInt(minute.innerHTML);
    let seconds = parseInt(second.innerHTML);

    if (seconds < 59) {
        seconds++;
    } else if (minutes < 59) {
        minutes++;
        seconds = 0;
    } else if (hours < 23) {
        hours++;
        minutes = 0;
        seconds = 0;
    } else {
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    hour.innerHTML ='0'+hours;
    minute.innerHTML = '0'+minutes;
    second.innerHTML = '0'+seconds;
    setTimeout(incrementClock, 999);
}

}
function lap () {
    let hours = hour.innerHTML;
    let minutes = minute.innerHTML;
    let seconds = second.innerHTML;
    let newLap = document.createElement("div");
    newLap.className = "lap";
    newLap.innerHTML = '0'+hours + ":" + '0'+minutes + ":" + '0'+seconds;
    laps.appendChild(newLap);
}