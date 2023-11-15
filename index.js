// // Select all the DOM
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const time = document.querySelector(".time");

// Variables
let intervalId;
let countMinutes = Number(prompt("Enter a number"));
let totalSeconds = countMinutes * 60

// decrementTime function()
function decrementTime(){
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60

    minutes = (minutes < 10) ? "0"+ minutes : minutes
    seconds = (seconds < 10) ? "0"+ seconds : seconds

    const displayTime = `${minutes}:${seconds}`

    document.querySelector(".time").innerHTML = displayTime

    if(totalSeconds === 0){
        clearInterval(intervalId);
        // Call Alarm Function
        playAlarm();
    }else{
        totalSeconds--
    }
}

// start timer function
start.addEventListener("click", function(){
    if(start.innerHTML === "Start"){
        intervalId = setInterval(decrementTime, 1000)
        start.innerHTML = "Stop"
    }else if(start.innerHTML === "Stop"){
        clearInterval(intervalId)
        start.innerHTML = "Start"
    }else{
        setInterval(decrementTime, 1000);
    }
})

// reset timer function
reset.addEventListener("click", function(){
    clearInterval(intervalId)
    countMinutes = Number(prompt("Enter a number"));
    totalSeconds = countMinutes * 60;
    const displayTime = "00:00";
    time.innerHTML = displayTime;
    start.innerHTML = "Start"; 
})

// Alarm Functionality
let alarmSound = new Audio('http://tifreakware.net/alarms/AlarmOnce.mp3'); 

function playAlarm() {
    alarmSound.play();
}