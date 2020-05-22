//WORK CLOCK
const startWorkButton = document.querySelector('#work-time-start');
const increaseWorkTime = document.querySelector('#work-time-up');
const decreaseWorkTime = document.querySelector('#work-time-down');
const pauseWorkTime = document.querySelector('#work-time-pause')
let workDeadline = undefined;
let workUp = 0;
let workDown = 0;
let workTimeLeft = 0;
let workCountdown = ''

function runWorkInterval() {
        const workTimeDisplay = document.querySelector('#work-time-display');
        workCountdown = setInterval(function(){
            let current = new Date().getTime();
            workTimeLeft = workDeadline - current;
            pauseWorkTime.addEventListener('click', pauseWork)
            let minutes = Math.floor(workTimeLeft / (1000 * 60));
            if (minutes < 10) minutes = '0' + minutes;
            let seconds = Math.floor((workTimeLeft / 1000) % 60);
            if (seconds < 10) seconds = '0' + seconds;
            workTimeDisplay.textContent = `${minutes}` + ':' + `${seconds}`;
            if (workTimeLeft <= 0) {
                clearInterval(workCountdown);
                workTimeDisplay.textContent = '00:00'
            }
        });
        
}
function setWorkTime() {
    let now = new Date().getTime();
    totalTime = 1500000 + workUp + workDown; // 25 minutes * 60 * 1000.
    workDeadline = now + totalTime;
    return workDeadline;
}
function pauseWork() {
    let tempWorkTime = workTimeLeft;
    clearInterval(workCountdown);
}
increaseWorkTime.addEventListener('click', () => {
    return workUp += 60000;
});
decreaseWorkTime.addEventListener('click', () => {
    return workDown -= 60000;
})
startWorkButton.addEventListener('click', () => {
    setWorkTime();
    runWorkInterval();
});
//PLAY CLOCK
const startPlayButton = document.querySelector('#play-time-start');
const increasePlayTime = document.querySelector('#play-time-up');
const decreasePlayTime = document.querySelector('#play-time-down');
const pausePlayTime = document.querySelector('#play-time-pause')
let playDeadline = undefined;
let playTimeLeft = 0;
let playCountdown = '';
let playUp = 0;
let playDown = 0;
function runPlayInterval() {
        const playTimeDisplay = document.querySelector('#play-time-display');
        playCountdown = setInterval(function(){
            let current = new Date().getTime();
            playTimeLeft = playDeadline - current;
            pausePlayTime.addEventListener('click', pausePlay)
            let minutes = Math.floor(playTimeLeft / (1000 * 60));
            if (minutes < 10) minutes = '0' + minutes;
            let seconds = Math.floor((playTimeLeft / 1000) % 60);
            if (seconds < 10) seconds = '0' + seconds;
            playTimeDisplay.textContent = `${minutes}` + ':' + `${seconds}`;
            if (playTimeLeft <= 0) {
                clearInterval(playCountdown);
                playTimeDisplay.textContent = '00:00'
            }
        });
        
}
startPlayButton.addEventListener('click', () => {
    setPlayTime();
    runPlayInterval();
});
function setPlayTime() {
    let now = new Date().getTime();
    let totalTime = 300000 + playUp + playDown; // minutes * 60 * 1000.
    playDeadline = now + totalTime;
    return playDeadline;
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