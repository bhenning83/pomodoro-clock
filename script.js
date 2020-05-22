//WORK CLOCK
const startWorkButton = document.querySelector('#work-time-start');
const increaseWorkTime = document.querySelector('#work-time-up');
const decreaseWorkTime = document.querySelector('#work-time-down');
const pauseWorkTime = document.querySelector('#work-time-pause')
const workTimeDisplay = document.querySelector('#work-time-display');
let workDeadline = undefined;
let workUp = 0;
let workDown = 0;
let workTimeLeft = 0;
let workCountdown = ''
let workPauseToggle = true;
let workStartToggle = true;
let alarm = new Audio('Sounds/alarm.wav')

function runWorkInterval() {
        workCountdown = setInterval(function(){
            let current = new Date().getTime();
            workTimeLeft = workDeadline - current;
            updateRunningWorkTime();
            if (workTimeLeft <= 0) {
                clearInterval(workCountdown);
                workTimeDisplay.textContent = '00:00';
                workTimeDisplay.style.color = 'red';
                alarm.play()
                let stopAlarm = document.createElement('button')
                stopAlarm.setAttribute('id', 'stop-alarm')
                stopAlarm.textContent = 'stop'
                workTimeDisplay.appendChild(stopAlarm)
                stopAlarm.addEventListener('click', () =>  {
                    stopAlarm.remove()
                    workReset()
                });
            };
        });
    }
        
        
function setTotalWorkTime() {
    let now = new Date().getTime();
    totalTime = 1500000 + workUp + workDown; // 25 minutes * 60 * 1000.
    updateStaticWorkTime();
    workDeadline = now + totalTime;
    return workDeadline;
    
}
function updateRunningWorkTime() {
    let minutes = Math.floor(workTimeLeft / (1000 * 60));
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = Math.floor((workTimeLeft / 1000) % 60);
    if (seconds < 10) seconds = '0' + seconds;
    workTimeDisplay.textContent = `${minutes}` + ':' + `${seconds}`;
}
function updateStaticWorkTime() {
    let minutes = Math.floor(totalTime / (1000 * 60));
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = Math.floor((totalTime / 1000) % 60);
    if (seconds < 10) seconds = '0' + seconds;
    workTimeDisplay.textContent = `${minutes}` + ':' + `${seconds}`;
}
function pauseWork() {
    if (workPauseToggle == true) {
        tempWorkTimeLeft = workTimeLeft;
        clearInterval(workCountdown);
        pauseWorkTime.textContent = 'Resume'
        workPauseToggle = false;
    } else if (workPauseToggle == false) {
        let now = new Date().getTime();
        workDeadline = now + tempWorkTimeLeft;
        runWorkInterval();
        pauseWorkTime.textContent = 'Pause'
        workPauseToggle = true;
    }
}
function workReset() {
    alarm.pause();
    workTimeDisplay.style.color = 'black';
    setTotalWorkTime();
    workStartToggle = true;
    startWorkButton.textContent = 'start';
}
increaseWorkTime.addEventListener('click', () => {
        workUp += 60000;
        return setTotalWorkTime();
});
decreaseWorkTime.addEventListener('click', () => {
        workDown -= 60000;
        return setTotalWorkTime();
})
startWorkButton.addEventListener('click', () => {
    if (workStartToggle == true) {
        setTotalWorkTime();
        runWorkInterval();
        startWorkButton.textContent = 'Stop'
        workStartToggle = false;
    } else if (workStartToggle == false) {
        clearInterval(workCountdown);
        updateStaticWorkTime();
        startWorkButton.textContent = 'Start'
        workStartToggle = true;
    }
});
pauseWorkTime.addEventListener('click', pauseWork)

























//PLAY CLOCK
const startPlayButton = document.querySelector('#play-time-start');
const increasePlayTime = document.querySelector('#play-time-up');
const decreasePlayTime = document.querySelector('#play-time-down');
const pausePlayTime = document.querySelector('#play-time-pause')
const playTimeDisplay = document.querySelector('#play-time-display');
let playDeadline = undefined;
let playTimeLeft = 0;
let playCountdown = '';
let playUp = 0;
let playDown = 0;
let playToggle = true;
function runPlayInterval() {
        playCountdown = setInterval(function(){
            let current = new Date().getTime();
            playTimeLeft = playDeadline - current;
            updatePlayTime();
            if (playTimeLeft <= 0) {
                clearInterval(playCountdown);
                playTimeDisplay.textContent = '00:00'
            }
        });
        
}
startPlayButton.addEventListener('click', () => {
    setTotalPlayTime();
    runPlayInterval();
});
function pausePlay() {
    if (playToggle == true) {
        tempPlayTimeLeft = playTimeLeft;
        clearInterval(playCountdown);
        pausePlayTime.textContent = 'resume'
        playToggle = false;
    } else if (playToggle == false) {
        let now = new Date().getTime();
        playDeadline = now + tempPlayTimeLeft;
        runPlayInterval();
        pausePlayTime.textContent = 'pause'
        playToggle = true;
    }
   
}
function setTotalPlayTime() {
    let now = new Date().getTime();
    let totalTime = 300000 + playUp + playDown; // minutes * 60 * 1000.
    playDeadline = now + totalTime;
    return playDeadline;
}
function updatePlayTime() {
    let minutes = Math.floor(playTimeLeft / (1000 * 60));
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = Math.floor((playTimeLeft / 1000) % 60);
    if (seconds < 10) seconds = '0' + seconds;
    playTimeDisplay.textContent = `${minutes}` + ':' + `${seconds}`;
}
increasePlayTime.addEventListener('click', () => {
    return playUp += 60000;
});
decreasePlayTime.addEventListener('click', () => {
    return playDown -= 60000;
})
function pausePlay() {
    clearInterval(playCountdown);
}
pausePlayTime.addEventListener('click', pausePlay)