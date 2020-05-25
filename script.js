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
    if (workStartToggle == true) return;
    if (workPauseToggle == true) {
        tempWorkTimeLeft = workTimeLeft;
        clearInterval(workCountdown);
        pauseWorkTime.textContent = 'Resume'
        workPauseToggle = false;
    } else if (workPauseToggle == false) {
        let now = new Date().getTime();
        workDeadline = now + tempWorkTimeLeft;
        runWorkInterval();
        pauseWorkTime.textContent = 'Pause';
        workPauseToggle = true;
    }
}
function workReset() {
    alarm.pause();
    workTimeDisplay.style.color = 'black';
    setTotalWorkTime();
    workStartToggle = true;
    workPauseToggle = true;
    pauseWorkTime.textContent = 'Pause';
    startWorkButton.textContent = 'Start';
}
startWorkButton.addEventListener('click', () => {
    if (workStartToggle == true) {
        setTotalWorkTime();
        runWorkInterval();
        startWorkButton.textContent = 'Stop'
        workStartToggle = false;
    } else if (workStartToggle == false) {
        clearInterval(workCountdown);
        workReset();
    }
});
increaseWorkTime.addEventListener('click', () => {  
    if (workStartToggle == false) return alert('That defeats the purpose of the pomodoro technique, dummy.');
        workUp += 60000;
        return setTotalWorkTime();
});
decreaseWorkTime.addEventListener('click', () => {
    if (workStartToggle == false) return alert('That defeats the purpose of the pomodoro technique, dummy.');
        workDown -= 60000;
        return setTotalWorkTime();
})

pauseWorkTime.addEventListener('click', pauseWork)

//PLAY CLOCK
const startPlayButton = document.querySelector('#play-time-start');
const increasePlayTime = document.querySelector('#play-time-up');
const decreasePlayTime = document.querySelector('#play-time-down');
const pausePlayTime = document.querySelector('#play-time-pause')
const playTimeDisplay = document.querySelector('#play-time-display');
let playDeadline = undefined;
let playUp = 0;
let playDown = 0;
let playTimeLeft = 0;
let playCountdown = ''
let playPauseToggle = true;
let playStartToggle = true;
let gong = new Audio('Sounds/gong.wav')

function runPlayInterval() {
        playCountdown = setInterval(function(){
            let current = new Date().getTime();
            playTimeLeft = playDeadline - current;
            updateRunningPlayTime();
            if (playTimeLeft <= 0) {
                clearInterval(playCountdown);
                playTimeDisplay.textContent = '00:00';
                playTimeDisplay.style.color = 'red';
                gong.play()
            };
        });
    }      
function setTotalPlayTime() {
    let now = new Date().getTime();
    totalTime = 300000 + playUp + playDown; // 25 minutes * 60 * 1000.
    updateStaticPlayTime();
    playDeadline = now + totalTime;
    return playDeadline;
    
}
function updateRunningPlayTime() {
    let minutes = Math.floor(playTimeLeft / (1000 * 60));
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = Math.floor((playTimeLeft / 1000) % 60);
    if (seconds < 10) seconds = '0' + seconds;
    playTimeDisplay.textContent = `${minutes}` + ':' + `${seconds}`;
}
function updateStaticPlayTime() {
    let minutes = Math.floor(totalTime / (1000 * 60));
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = Math.floor((totalTime / 1000) % 60);
    if (seconds < 10) seconds = '0' + seconds;
    playTimeDisplay.textContent = `${minutes}` + ':' + `${seconds}`;
}
function pausePlay() {
    if (playStartToggle == true) return;
    if (playPauseToggle == true) {
        tempPlayTimeLeft = playTimeLeft;
        clearInterval(playCountdown);
        pausePlayTime.textContent = 'Resume'
        playPauseToggle = false;
    } else if (playPauseToggle == false) {
        let now = new Date().getTime();
        playDeadline = now + tempPlayTimeLeft;
        runPlayInterval();
        pausePlayTime.textContent = 'Pause';
        playPauseToggle = true;
    }
}
function playReset() {
    alarm.pause();
    playTimeDisplay.style.color = 'white';
    setTotalPlayTime();
    playStartToggle = true;
    playPauseToggle = true;
    pausePlayTime.textContent = 'Pause';
    startPlayButton.textContent = 'Start';
}
startPlayButton.addEventListener('click', () => {
    if (playStartToggle == true) {
        setTotalPlayTime();
        runPlayInterval();
        startPlayButton.textContent = 'Stop'
        playStartToggle = false;
    } else if (playStartToggle == false) {
        clearInterval(playCountdown);
        playReset();
    }
});
increasePlayTime.addEventListener('click', () => {  
    if (playStartToggle == false) return alert('That defeats the purpose of the Pomodoro technique, dummy.');
        playUp += 60000;
        return setTotalPlayTime();
});
decreasePlayTime.addEventListener('click', () => {
    if (playStartToggle == false) return alert('That defeats the purpose of the Pomodoro technique, dummy.');
        playDown -= 60000;
        return setTotalPlayTime();
})

pausePlayTime.addEventListener('click', pausePlay)